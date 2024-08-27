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
import {Dialog} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {IItem} from "@/lib/interfaces";
import {useMediaQuery} from "@/hooks/useMediaQuery";
import {Search} from "lucide-react";
import {OFFICES_CONSTANTS} from "@/CONSTANTS/OFFICES_CONSTANTS";
import {getItemsPaginationUseCase} from "@/core/use-cases/items";
import ItemCard from "./item-card"

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
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const LIST_OF_OFFICES = Object.keys(OFFICES_CONSTANTS);


    useEffect(() => {
        async function loadItems(page: number) {
            const getItemsPaginationApiResponse = await getItemsPaginationUseCase(page)
            return getItemsPaginationApiResponse?.data;
        }

        loadItems(currentPage).then((itemsPaginationData) => {
            setItems(itemsPaginationData.items);
            setCurrentPage(itemsPaginationData.current_page);
            setTotalPages(itemsPaginationData.last_page);
        });
    }, [])

    return (
        <>
            <div className="w-full">
                {/*Header section*/}
                <div className="flex items-center justify-between mb-6">
                    {/*Filters*/}
                    <div className="flex items-center gap-4">
                        {isDesktop ?
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
                                        ))};

                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </>
                            :
                            // TODO: Make the mobile version of filter section
                            null}
                    </div>
                    {/*Search items*/}
                    <div className="flex items-center gap-2 flex-wrap">
                        {isDesktop ?
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
                {filteredItems && filteredItems.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                            {filteredItems.map((item) => (
                                <ItemCard key={item.id} item={item}/>
                            ))}
                        </div>
                    ) :
                    <p className="text-center text-muted-foreground">No results for {filterSearch}</p>}
            </div>
            <Dialog open={showModal} onOpenChange={setShowModal}>
                {/*<DialogContent className="sm:max-w-2xl">*/}
                {/*    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
                {/*        <div>*/}
                {/*            <img*/}
                {/*                src="/placeholder.svg"*/}
                {/*                alt={modalItem?.model_name}*/}
                {/*                width={400}*/}
                {/*                height={300}*/}
                {/*                className="rounded-lg object-cover"*/}
                {/*                style={{aspectRatio: "400/300", objectFit: "cover"}}*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div>*/}
                {/*            <DialogTitle className="text-2xl font-bold mb-2">{modalItem?.model_name}</DialogTitle>*/}
                {/*            <p className="text-muted-foreground mb-4">{modalItem?.description}</p>*/}
                {/*            <div className="flex items-center justify-between mb-4">*/}
                {/*<span*/}
                {/*    className={`px-2 py-1 rounded-full text-xs font-medium ${*/}
                {/*        modalItem?.available !== undefined && modalItem.available > 0*/}
                {/*            ? "bg-green-100 text-green-600"*/}
                {/*            : "bg-red-100 text-red-600"*/}
                {/*    }`}*/}
                {/*>*/}
                {/*    {modalItem?.available !== undefined && modalItem.available > 0*/}
                {/*        ? `${modalItem.available} available`*/}
                {/*        : "Out of stock"}*/}
                {/*</span>*/}
                {/*                <span className="text-sm text-muted-foreground">{modalItem?.condition}</span>*/}
                {/*            </div>*/}
                {/*            <div className="grid grid-cols-2 gap-4 mb-4">*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="borrowing-period-label" className="text-sm font-medium">*/}
                {/*                        Borrowing Period (days)*/}
                {/*                    </Label>*/}
                {/*                    <Select*/}
                {/*                        value={borrowingPeriod}*/}
                {/*                        onValueChange={handleBorrowingPeriodChange}*/}
                {/*                        // @ts-ignore*/}
                {/*                        className="w-full"*/}
                {/*                    >*/}
                {/*                        <SelectTrigger>*/}
                {/*                            <SelectValue placeholder="Select borrowing period"/>*/}
                {/*                        </SelectTrigger>*/}
                {/*                        <SelectContent>*/}
                {/*                            <SelectItem value="1">1 day</SelectItem>*/}
                {/*                            <SelectItem value="3">3 days</SelectItem>*/}
                {/*                            <SelectItem value="4">1 week</SelectItem>*/}
                {/*                            <SelectItem value="5">2 weeks</SelectItem>*/}
                {/*                        </SelectContent>*/}
                {/*                    </Select>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="quantity" className="text-sm font-medium">*/}
                {/*                        Quantity*/}
                {/*                    </Label>*/}
                {/*                    <Input id="quantity" type="number" min={1} defaultValue={1} className="w-full"/>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="grid grid-cols-2 gap-4 mb-4">*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="borrow-start-date" className="text-sm font-medium">*/}
                {/*                        Borrow Start Date*/}
                {/*                    </Label>*/}
                {/*                    <Popover>*/}
                {/*                        <PopoverTrigger asChild>*/}
                {/*                            <Button*/}
                {/*                                id="borrow-start-date"*/}
                {/*                                variant="outline"*/}
                {/*                                className="w-full justify-start text-left font-normal"*/}
                {/*                            >*/}
                {/*                                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1"/>*/}
                {/*                                Select start date*/}
                {/*                            </Button>*/}
                {/*                        </PopoverTrigger>*/}
                {/*                        <PopoverContent className="w-auto p-0" align="start">*/}
                {/*                            <Calendar initialFocus mode="single"/>*/}
                {/*                        </PopoverContent>*/}
                {/*                    </Popover>*/}
                {/*                </div>*/}
                {/*                <div>*/}
                {/*                    <Label htmlFor="borrow-return-date" className="text-sm font-medium">*/}
                {/*                        Borrow Return Date*/}
                {/*                    </Label>*/}
                {/*                    <Popover>*/}
                {/*                        <PopoverTrigger asChild>*/}
                {/*                            <Button*/}
                {/*                                id="borrow-return-date"*/}
                {/*                                variant="outline"*/}
                {/*                                className="w-full justify-start text-left font-normal"*/}
                {/*                            >*/}
                {/*                                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1"/>*/}
                {/*                                Select return date*/}
                {/*                            </Button>*/}
                {/*                        </PopoverTrigger>*/}
                {/*                        <PopoverContent className="w-auto p-0" align="start">*/}
                {/*                            <Calendar initialFocus mode="single"/>*/}
                {/*                        </PopoverContent>*/}
                {/*                    </Popover>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="mb-4">*/}
                {/*                <Label className="text-sm font-medium">Additional Information</Label>*/}
                {/*                <p className="text-muted-foreground">*/}
                {/*                    Policies: Items must be returned in the same condition as borrowed. A late fee of $1*/}
                {/*                    per day will be*/}
                {/*                    charged for overdue returns. Rules: Maximum quantity per borrow is 3 items. Maximum*/}
                {/*                    borrow period is 2*/}
                {/*                    weeks. Condition: All items are thoroughly cleaned and sanitized before being made*/}
                {/*                    available for*/}
                {/*                    borrowing. Department: This item is managed by the IT department.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="flex gap-2">*/}
                {/*                <Button size="sm" variant="outline" onClick={() => setShowModal(false)}>*/}
                {/*                    Cancel*/}
                {/*                </Button>*/}
                {/*                <Button*/}
                {/*                    size="sm"*/}
                {/*                    onClick={() => {*/}
                {/*                        setShowModal(false)*/}
                {/*                    }}*/}
                {/*                >*/}
                {/*                    Add to Cart*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</DialogContent>*/}
            </Dialog>
        </>

    )
}

// @ts-ignore
function CalendarDaysIcon(props) {
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
            <path d="M8 2v4"/>
            <path d="M16 2v4"/>
            <rect width="18" height="18" x="3" y="4" rx="2"/>
            <path d="M3 10h18"/>
            <path d="M8 14h.01"/>
            <path d="M12 14h.01"/>
            <path d="M16 14h.01"/>
            <path d="M8 18h.01"/>
            <path d="M12 18h.01"/>
            <path d="M16 18h.01"/>
        </svg>
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
