import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {OFFICES_CONSTANTS} from "@/CONSTANTS/OFFICES_CONSTANTS";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {ChevronDownIcon} from "@radix-ui/react-icons";

interface IFilterAndSearchProps {
    showFilters: boolean;
    filterCategory: string;
    setFilterCategory: (category: string) => void;
    filterOffice: string;
    setFilterOffice: (office: string) => void;
    sortBy: string;
    setSortBy: (sort: string) => void;
    filterSearch: string;
    setFilterSearch: (search: string) => void;
}

export default function FilterAndSearchComponent({
                                                     showFilters,
                                                     filterCategory,
                                                     setFilterCategory,
                                                     filterOffice,
                                                     setFilterOffice,
                                                     sortBy,
                                                     setSortBy,
                                                     filterSearch,
                                                     setFilterSearch
                                                 }: IFilterAndSearchProps) {

    const LIST_OF_OFFICES = Object.keys(OFFICES_CONSTANTS);

    return (
        <>
            {showFilters ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6  gap-4">
                    <div className="flex flex-wrap items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    Sort by: {sortBy === "name" ? "Name" : "Office"}
                                    <ChevronDownIcon className="h-4 w-4"/>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuItem onSelect={() => setSortBy("name")}>Name</DropdownMenuItem>
                                <DropdownMenuItem onSelect={() => setSortBy("office")}>Office</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    {filterCategory || "All Categories"}
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
                                {["Electronics", "Stationery", "Equipment"].map((category) => (
                                    <DropdownMenuItem
                                        key={category}
                                        onSelect={() => setFilterCategory(category)}
                                        className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                    >
                                        {category}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="flex items-center gap-2">
                                    {filterOffice || "All Offices"}
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
                                    <DropdownMenuItem
                                        key={office}
                                        onSelect={() => setFilterOffice(OFFICES_CONSTANTS[office].acronym)}
                                        className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                                    >
                                        {`${OFFICES_CONSTANTS[office].acronym} | ${OFFICES_CONSTANTS[office].office}`}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                        <Search className="h-5 w-5 text-muted-foreground"/>
                        <Input
                            type="search"
                            placeholder="Search items..."
                            value={filterSearch}
                            onChange={(e) => setFilterSearch(e.target.value)}
                            className="flex-grow"
                        />
                    </div>
                </div>
            ) : null}
        </>
    );
}