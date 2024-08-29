"use client"

import {useEffect, useMemo, useState} from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {IItem} from "@/lib/interfaces";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {Search} from "lucide-react";
import {OFFICES_CONSTANTS} from "@/CONSTANTS/OFFICES_CONSTANTS";
import {getItemsPaginationUseCase} from "@/core/use-cases/items";
import ItemCard from "./item-card"
import {Skeleton} from "@/components/ui/skeleton";
import SpecificItemModal from "@/components/borrow/specific-item-modal";


export default function ExploreItemsSection() {
    // const items = [
    //     {
    //         id: 1,
    //         name: "Projector",
    //         image: "/placeholder.svg",
    //         description: "High-definition projector for presentations",
    //         category: "Electronics",
    //         condition: "Excellent",
    //         available: 5,
    //     },
    //     {
    //         id: 2,
    //         name: "Laptop",
    //         image: "/placeholder.svg",
    //         description: "Powerful laptop for research and projects",
    //         category: "Electronics",
    //         condition: "Good",
    //         available: 3,
    //     },
    //     {
    //         id: 3,
    //         name: "Whiteboard",
    //         image: "/placeholder.svg",
    //         description: "Large whiteboard for collaborative work",
    //         category: "Stationery",
    //         condition: "Fair",
    //         available: 8,
    //     },
    //     {
    //         id: 4,
    //         name: "Camera",
    //         image: "/placeholder.svg",
    //         description: "High-quality camera for photography",
    //         category: "Electronics",
    //         condition: "Excellent",
    //         available: 2,
    //     },
    //     {
    //         id: 5,
    //         name: "Tripod",
    //         image: "/placeholder.svg",
    //         description: "Sturdy tripod for camera and video",
    //         category: "Equipment",
    //         condition: "Good",
    //         available: 6,
    //     },
    //     {
    //         id: 6,
    //         name: "Markers",
    //         image: "/placeholder.svg",
    //         description: "Assorted color markers for presentations",
    //         category: "Stationery",
    //         condition: "Fair",
    //         available: 10,
    //     },
    // ]

    const [cacheTimestamp, setCacheTimestamp] = useState<number | null>(null);

    const [isFetchingItems, setIsFetchingItems] = useState(false)

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [items, setItems] = useState<IItem[]>([])

    const [sortBy, setSortBy] = useState("name")
    const [filterCategory, setFilterCategory] = useState("")
    const [filterOffice, setFilterOffice] = useState("")
    const [filterSearch, setFilterSearch] = useState("")

    const [showModal, setShowModal] = useState(false)
    const [modalItem, setModalItem] = useState<IItem>()

    const [borrowingPeriod, setBorrowingPeriod] = useState()

    const filteredItems = useMemo(() => {
        return items
            .filter((item) => {
                if (filterCategory && item.category !== filterCategory) return false
                if (filterSearch && !item.model_name.toLowerCase().includes(filterSearch.toLowerCase())) return false
                return !(filterOffice && item.office !== filterOffice);
            })
            .sort((a, b) => {
                if (sortBy === "name") {
                    return a.model_name.localeCompare(b.model_name)
                } else if (sortBy === "office") {
                    return a.office.localeCompare(b.office)
                }
                return 0
            })
    }, [items, sortBy, filterCategory, filterOffice, filterSearch])

    const handleBorrowingPeriodChange = (value: any) => {
        setBorrowingPeriod(value)
    }

    const isMedium = useMediaQuery("(min-width: 1024px)");

    const LIST_OF_OFFICES = Object.keys(OFFICES_CONSTANTS);


    useEffect(() => {
        async function loadItems(page: number) {
            setIsFetchingItems(true);

            // Check if cached data exists and is less than 5 minutes old
            const cachedData = localStorage.getItem('itemsCache');
            const cachedTimestamp = localStorage.getItem('itemsCacheTimestamp');
            if (cachedData && cachedTimestamp) {
                const parsedData = JSON.parse(cachedData);
                const parsedTimestamp = parseInt(cachedTimestamp);
                const currentTime = new Date().getTime();

                // If cache is less than 5 minutes old, use it
                if (currentTime - parsedTimestamp < 5 * 60 * 1000) {
                    setCacheTimestamp(parsedTimestamp);
                    setIsFetchingItems(false);
                    setItems(parsedData.items);
                    setCurrentPage(parsedData.current_page);
                    setTotalPages(parsedData.last_page);
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
                setCacheTimestamp(newTimestamp);
            } catch (error) {
                console.error('Error fetching items:', error);
                // Handle error (e.g., show error message to user)
            } finally {
                setIsFetchingItems(false);
            }
        }

        loadItems(currentPage);
    }, [currentPage]);

    return (
        // TODO: Session management because the bearer token somehow expires and the fetching of items doesn't work.
        //  Implement that in the use case of fetch items
        <>
            <div className="w-full">
                {/*Header section*/}
                <div className="flex items-center justify-between mb-6 px-2">
                    {/*Filters*/}
                    <div className="flex items-center gap-4">
                        {isMedium ?
                            <>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="flex items-center gap-2">
                                            Sort by: Name
                                            <ChevronDownIcon className="h-4 w-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem onSelect={() => setSortBy("name")}>Name</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="flex items-center gap-2">
                                            {filterCategory ? filterCategory : "All Categories"}
                                            <ChevronDownIcon className="h-4 w-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem
                                            onSelect={() => setFilterCategory("")}
                                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                        >
                                            {/*TODO: Make a categories constant*/}
                                            All Categories
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem
                                            onSelect={() => setFilterCategory("Electronics")}
                                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                        >
                                            Electronics
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onSelect={() => setFilterCategory("Stationery")}
                                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                        >
                                            Stationery
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onSelect={() => setFilterCategory("Equipment")}
                                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                        >
                                            Equipment
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" className="flex items-center gap-2">
                                            {filterOffice ? filterOffice : "All Offices"}
                                            <ChevronDownIcon className="h-4 w-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuItem
                                            onSelect={() => setFilterOffice("")}
                                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                        >
                                            All Offices
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator/>
                                        {LIST_OF_OFFICES.map((office: string) => (
                                            <>
                                                <DropdownMenuItem
                                                    onSelect={() => setFilterOffice(OFFICES_CONSTANTS[office].acronym)}
                                                    className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                                >
                                                    {(OFFICES_CONSTANTS[office].acronym) + " | " + (OFFICES_CONSTANTS[office].office)}
                                                </DropdownMenuItem>
                                            </>
                                        ))}

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                            :
                            // TODO: Make the mobile version of filter section
                            null}
                    </div>
                    {/*Search items*/}
                    <div className="flex items-center gap-2 flex-wrap">
                        {isMedium ?
                            <>
                                <Search className="h-5 w-5 text-muted-foreground"/>
                                <Input
                                    type="search"
                                    placeholder="Search items..."
                                    value={filterSearch}
                                    onChange={(e) => setFilterSearch(e.target.value)}
                                    className="flex-1 min-w-[30dvh]"
                                />
                            </>
                            :
                            // TODO: Make the mobile version of search section
                            null}

                    </div>
                </div>

                {/*Items section*/}
                {isFetchingItems ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="bg-background rounded-lg border shadow-sm overflow-hidden">
                                <Skeleton className="w-full h-48"/>
                                <div className="p-4">
                                    <Skeleton className="h-6 w-3/4 mb-2"/>
                                    <Skeleton className="h-4 w-full mb-4"/>
                                    <div className="flex items-center justify-between mb-4">
                                        <Skeleton className="h-5 w-24 rounded-full"/>
                                        <Skeleton className="h-4 w-16"/>
                                    </div>
                                    <Skeleton className="h-10 w-full"/>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filteredItems && filteredItems.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <ItemCard key={item.id} props={{item, setShowModal, setModalItem}}/>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-muted-foreground">No results
                        found {filterSearch ? `for ${filterSearch}` : null}</p>
                )}
            </div>

            <SpecificItemModal props={{showModal, modalItem, setShowModal}}/>
        </>

    )
}


// @ts-ignore
function ChevronDownIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m6 9 6 6 6-6"/>
        </svg>
    )
}
