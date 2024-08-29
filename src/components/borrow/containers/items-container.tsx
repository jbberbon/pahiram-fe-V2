"use client"

import {useEffect, useRef, useState} from "react"
import {IItem} from "@/lib/interfaces";
import ItemCard from "../presentational/item-card"
import SpecificItemModal from "@/components/borrow/presentational/specific-item-modal";
import {useItemsPagination} from "@/hooks/borrow/useItemsPagination";
import {useFilteredItems} from "@/hooks/borrow/useFilteredItems";
import FilterAndSearchComponent from "@/components/borrow/presentational/filter-and-search-component";
import ItemsListSkeleton from "@/components/borrow/presentational/items-list-skeleton";


export default function ItemsContainer() {

    const [filterCategory, setFilterCategory] = useState("");
    const [filterOffice, setFilterOffice] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const [filterSearch, setFilterSearch] = useState("");

    const {items, isFetchingItems, totalPages, currentPage, setPage} = useItemsPagination()
    const filteredItems = useFilteredItems({items, filterCategory, filterSearch, filterOffice, sortBy})

    const [showModal, setShowModal] = useState(false)
    const [modalItem, setModalItem] = useState<IItem>()

    const [showFilters, setShowFilters] = useState(true);

    const [gridColumns, setGridColumns] = useState(3);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateLayout = () => {
            if (containerRef.current) {
                const width = containerRef.current.offsetWidth;
                setShowFilters(width >= 768);

                if (width < 600) {
                    setGridColumns(1);
                } else if (width < 900) {
                    setGridColumns(2);
                } else {
                    setGridColumns(3);
                }
            }
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);
        return () => window.removeEventListener('resize', updateLayout);
    }, []);


    return (
        // TODO: Session management because the bearer token somehow expires and the fetching of items doesn't work.
        //  Implement that in the use case of fetch items
        <div ref={containerRef} className="w-full">

            {/*Filters section*/}
            <FilterAndSearchComponent props={{
                showFilters,
                filterCategory,
                setFilterCategory,
                filterOffice,
                setFilterOffice,
                sortBy,
                setSortBy,
                filterSearch,
                setFilterSearch
            }}/>

            {/*Items section*/}
            <div className={`grid gap-4 ${
                gridColumns === 1 ? 'grid-cols-1' :
                    gridColumns === 2 ? 'grid-cols-2' :
                        'grid-cols-3'
            }`}>
                {isFetchingItems ? (
                    <ItemsListSkeleton/>
                ) : filteredItems && filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                        <ItemCard key={item.id} props={{item, setShowModal, setModalItem}}/>
                    ))
                ) : (
                    <p className="text-center text-muted-foreground col-span-full">
                        No results found {filterSearch ? `for ${filterSearch}` : null}
                    </p>
                )}
            </div>

            <SpecificItemModal props={{showModal, modalItem, setShowModal}}/>
        </div>

    )
}


