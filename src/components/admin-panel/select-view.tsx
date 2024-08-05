"use client";

import * as React from "react";
import {ChevronsUpDown} from "lucide-react"

import {useMediaQuery} from "@/hooks/useMediaQuery";
import {Button} from "@/components/ui/button";
import {Drawer, DrawerContent, DrawerTrigger} from "@/components/ui/drawer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useViewStore} from "@/hooks/useView";


export function SelectView() {
    const [open, setOpen] = React.useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const {views, selectedView, setSelectedView} = useViewStore((state: any) => state);

    const handleSelect = (view: string) => {
        setSelectedView(view);
        setOpen(false);
    };

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen);
    };

    const renderViewList = () => (
        <SelectContent>
            <SelectGroup>
                <SelectLabel>Views</SelectLabel>
                {views.map((view: string) => (
                    <SelectItem
                        key={view}
                        value={view}
                        onSelect={() => handleSelect(view)}
                    >
                        {view}
                    </SelectItem>
                ))}
            </SelectGroup>
        </SelectContent>
    );

    if (isDesktop) {
        return (
            <Select value={selectedView}
                    onValueChange={(value) => handleSelect(views.find((view: string) => view === value)!)}>
                <SelectTrigger onClick={() => handleOpenChange(true)} className="w-[180px]">
                    <SelectValue placeholder="Select a view"/>
                </SelectTrigger>
                {renderViewList()}
            </Select>
        );
    }

    return (
        <Drawer open={open} onOpenChange={handleOpenChange}>
            <DrawerTrigger asChild>
                <Button variant="outline" className="w-[150px] justify-between">
                    {selectedView ? selectedView : "+ Set view"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mt-4 border-t p-4">
                    {views.map((view: string) => (
                        <Button
                            key={view}
                            variant="ghost"
                            className="w-full text-left text-lg"
                            onClick={() => handleSelect(view)}
                        >
                            {view}
                        </Button>
                    ))}
                </div>
            </DrawerContent>
        </Drawer>
    );
}