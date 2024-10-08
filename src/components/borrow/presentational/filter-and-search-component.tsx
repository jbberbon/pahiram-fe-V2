import React, { useCallback, useMemo } from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { OFFICES_CONSTANTS } from "@/CONSTANTS/OFFICES_CONSTANTS";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ChevronDownIcon } from "@radix-ui/react-icons";

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

export default function FilterAndSearchComponent({ props }: { props: IFilterAndSearchProps }) {
    const {
        showFilters,
        filterCategory,
        setFilterCategory,
        filterOffice,
        setFilterOffice,
        sortBy,
        setSortBy,
        filterSearch,
        setFilterSearch
    } = props;

    const LIST_OF_OFFICES = useMemo(() => Object.keys(OFFICES_CONSTANTS), []);

    const handleSortChange = useCallback((sort: string) => {
        setSortBy(sort);
    }, [setSortBy]);

    const handleCategoryChange = useCallback((category: string) => {
        setFilterCategory(category);
    }, [setFilterCategory]);

    const handleOfficeChange = useCallback((office: string) => {
        setFilterOffice(office);
    }, [setFilterOffice]);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterSearch(e.target.value);
    }, [setFilterSearch]);

    const renderCategoryItems = useMemo(() => (
        ["Electronics", "Stationery", "Equipment"].map((category) => (
            <DropdownMenuItem
                key={category}
                onSelect={() => handleCategoryChange(category)}
                className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
            >
                {category}
            </DropdownMenuItem>
        ))
    ), [handleCategoryChange]);

    const renderOfficeItems = useMemo(() => (
        LIST_OF_OFFICES.map((office: string) => (
            <DropdownMenuItem
                key={office}
                onSelect={() => handleOfficeChange(OFFICES_CONSTANTS[office].acronym)}
                className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
            >
                {`${OFFICES_CONSTANTS[office].acronym} | ${OFFICES_CONSTANTS[office].office}`}
            </DropdownMenuItem>
        ))
    ), [LIST_OF_OFFICES, handleOfficeChange]);

    if (!showFilters) return null;

    return (
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div className="flex flex-wrap items-center gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="flex items-center gap-2">
                            Sort by: {sortBy === "name" ? "Name" : "Office"}
                            <ChevronDownIcon className="h-4 w-4"/>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        <DropdownMenuItem onSelect={() => handleSortChange("name")}>Name</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => handleSortChange("office")}>Office</DropdownMenuItem>
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
                            onSelect={() => handleCategoryChange("")}
                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                        >
                            All Categories
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        {renderCategoryItems}
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
                            onSelect={() => handleOfficeChange("")}
                            className="[&[data-highlighted]]:bg-accent [&[data-highlighted]]:text-accent-foreground"
                        >
                            All Offices
                        </DropdownMenuItem>
                        <DropdownMenuSeparator/>
                        {renderOfficeItems}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <Search className="h-5 w-5 text-muted-foreground"/>
                <Input
                    type="search"
                    placeholder="Search items..."
                    value={filterSearch}
                    onChange={handleSearchChange}
                    className="flex-grow min-w-[30dvh]"
                />
            </div>
        </div>
    );
}