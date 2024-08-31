"use client";
// TODO: Make the filter, filter all the items and not just whats

import React, {Suspense, useCallback, useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import SpecificItemModal from "@/components/borrow/presentational/item-modal";
import {useItems} from "@/hooks/borrow/useItems";
import {useFilteredItems} from "@/hooks/borrow/useFilteredItems";
import FilterAndSearchComponent from "@/components/borrow/presentational/filter-and-search-component";
import ItemCardSkeleton from "@/components/borrow/presentational/item-card-skeleton";
import ItemsPagination from "@/components/borrow/presentational/items-pagination";
import ItemsList from "@/components/borrow/presentational/items-list";
import {getURLParams} from "@/helper/borrow/getURLParams";
import {updateURLParams} from "@/helper/borrow/updateURLParams";
import {useRouter} from "next/navigation";


export const experimental_ppr = true

export default function ItemsContainer() {
    const {items, isFetchingItems, totalPages, page} = useItems();

    const filteredItems = useFilteredItems({items});

    const [showFilters, setShowFilters] = useState(true);
    const [gridColumns, setGridColumns] = useState(3);

    const containerRef = useRef<HTMLDivElement>(null);

    const {filterSearch} = getURLParams();

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
            window.scrollTo({top: 0, behavior: 'smooth'});
        };
        scrollToTop();
    }, [page]);

    const router = useRouter();

    const handlePageChange = useCallback((page: number) => {
        const newUrl = updateURLParams({page: page.toString()});
        router.push(newUrl);
    }, []);


    return (
        <motion.div
            ref={containerRef}
            className="w-full"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
        >
            <FilterAndSearchComponent showFilters={showFilters}/>

            <div className={`grid gap-4 ${
                gridColumns === 1 ? 'grid-cols-1' :
                    gridColumns === 2 ? 'grid-cols-2' :
                        'grid-cols-3'
            }`}>
                {
                    isFetchingItems ? (
                        <ItemCardSkeleton/>
                    ) : filteredItems && filteredItems.length > 0 ?
                        (
                            <Suspense fallback={<ItemCardSkeleton/>}>
                                <ItemsList items={filteredItems}/>
                            </Suspense>
                        ) :
                        (
                            <p className="text-center text-muted-foreground col-span-full">
                                No results found {filterSearch ? `for ${filterSearch}` : null}
                            </p>
                        )
                }

            </div>

            <div className="mt-4">
                <ItemsPagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>

            <SpecificItemModal/>
        </motion.div>
    );
}
