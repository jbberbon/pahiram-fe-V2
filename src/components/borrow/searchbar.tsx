import React from 'react';
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; // Import an icon, or use any other icon library

export default function SearchBar() {
    return (

        <div className="relative w-full lg:w-6/12 flex items-center mt-6">
            <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <Input 
                type="text" 
                placeholder="Search item by name, type, category..." 
                className="pl-10 border-black dark:border-white focus:border-transparent focus:ring-0 w-full" 
            />
        </div>

    );
}
