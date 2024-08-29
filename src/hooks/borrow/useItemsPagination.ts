import { IItem } from "@/lib/interfaces";
import { useEffect, useState } from "react";
import { getItemsPaginationUseCase } from "@/core/use-cases/items";

export const useItemsPagination = () => {
    const [items, setItems] = useState<IItem[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isFetchingItems, setIsFetchingItems] = useState(false);
    const [cachedTimestamp, setCachedTimestamp] = useState<number | null>(null);

    useEffect(() => {
        async function loadItems(page: number) {
            setIsFetchingItems(true);

            // Check if cached data exists and is less than 5 minutes old
            const cachedData = localStorage.getItem('itemsCache');
            if (cachedData && cachedTimestamp) {
                const currentTime = new Date().getTime();

                // If cache is less than 5 minutes old, use it
                if (currentTime - cachedTimestamp < 5 * 60 * 1000) {
                    const parsedData = JSON.parse(cachedData);
                    setItems(parsedData.items);
                    setCurrentPage(parsedData.current_page);
                    setTotalPages(parsedData.last_page);
                    setIsFetchingItems(false);
                    return;
                }
            }

            try {
                const getItemsPaginationApiResponse = await getItemsPaginationUseCase(page);
                const itemsPaginationData = getItemsPaginationApiResponse?.data;

                setItems(itemsPaginationData.items);
                setCurrentPage(itemsPaginationData.current_page);
                setTotalPages(itemsPaginationData.last_page);

                // Update cache
                localStorage.setItem('itemsCache', JSON.stringify(itemsPaginationData));
                const newTimestamp = new Date().getTime();
                localStorage.setItem('itemsCacheTimestamp', newTimestamp.toString());
                setCachedTimestamp(newTimestamp);
            } catch (error) {
                console.error('Error fetching items:', error);
                // Handle error (e.g., show error message to user)
            } finally {
                setIsFetchingItems(false);
            }
        }

        loadItems(currentPage);
    }, [currentPage, cachedTimestamp]);

    const setPage = (page: number) => {
        setCurrentPage(page);
    };

    return {
        items,
        isFetchingItems,
        totalPages,
        currentPage,
        setPage
    };
};