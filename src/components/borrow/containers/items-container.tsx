"use client";

import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import { motion } from "framer-motion";
import {IItem} from "@/lib/interfaces";
import ItemCard from "../presentational/item-card";
import SpecificItemModal from "@/components/borrow/presentational/specific-item-modal";
import {useItems} from "@/hooks/borrow/useItems";
import {useFilteredItems} from "@/hooks/borrow/useFilteredItems";
import FilterAndSearchComponent from "@/components/borrow/presentational/filter-and-search-component";
import ItemCardSkeleton from "@/components/borrow/presentational/item-card-skeleton";
import ItemsPagination from "@/components/borrow/presentational/items-pagination";


const MemoizedFilterAndSearchComponent = React.memo(FilterAndSearchComponent);

export default function ItemsContainer() {
    const [filterCategory, setFilterCategory] = useState("");
    const [filterOffice, setFilterOffice] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [filterSearch, setFilterSearch] = useState("");

    const {items, isFetchingItems, totalPages, page} = useItems();
    const filteredItems = useFilteredItems({items, filterCategory, filterSearch, filterOffice, sortBy});

    const [showModal, setShowModal] = useState(false);
    const [modalItem, setModalItem] = useState<IItem>();
    const [showFilters, setShowFilters] = useState(true);
    const [gridColumns, setGridColumns] = useState(3);

    const filterProps = useMemo(() => ({
        showFilters,
        filterCategory,
        setFilterCategory,
        filterOffice,
        setFilterOffice,
        sortBy,
        setSortBy,
        filterSearch,
        setFilterSearch,
    }), [showFilters, filterCategory, filterOffice, sortBy, filterSearch]);

    const containerRef = useRef<HTMLDivElement>(null);

    const updateLayout = useCallback(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth;
            setShowFilters(width >= 768);
            setGridColumns(width < 600 ? 1 : width < 900 ? 2 : 3);
        }
    }, []);
    useEffect(() => {
        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, [updateLayout]);

    useEffect(() => {
        const scrollToTop = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50)); // Ensure the content is loaded before scrolling
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        scrollToTop();
    }, [page]);


    return (
        <motion.div
            ref={containerRef}
            className="w-full"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <MemoizedFilterAndSearchComponent props={filterProps}/>

            <div className={`grid gap-4 ${
                gridColumns === 1 ? 'grid-cols-1' :
                    gridColumns === 2 ? 'grid-cols-2' :
                        'grid-cols-3'
            }`}>
                {isFetchingItems ? (
                    <ItemCardSkeleton/>
                ) : filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <ItemCard key={index} props={{item, setShowModal, setModalItem}}/>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground col-span-full">
                        No results found {filterSearch ? `for ${filterSearch}` : null}
                    </p>
                )}
            </div>

            <div className="mt-4">
                <ItemsPagination
                    currentPage={page}
                    totalPages={totalPages}
                />
            </div>

            <SpecificItemModal props={{showModal, modalItem, setShowModal}}/>
        </motion.div>
    );
}
