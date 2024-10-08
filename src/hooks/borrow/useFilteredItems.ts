import {useMemo} from "react";
import {IItem} from "@/lib/interfaces";

interface IUseFilteredItems {
    items: IItem[]
    filterCategory: string
    filterSearch: string
    filterOffice: string
    sortBy: string
}

export const useFilteredItems = ({
                                     items,
                                     filterCategory,
                                     filterSearch,
                                     filterOffice,
                                     sortBy
                                 }: IUseFilteredItems) => {

    return useMemo(() => {
        return items
            .filter((item) => {
                if (filterCategory && item.group_category_id !== filterCategory) return false
                if (filterOffice && item.department !== filterOffice) return false;
                if (filterSearch) {
                    const searchLower = filterSearch.toLowerCase();
                    return (
                        item.model_name.toLowerCase().includes(searchLower) ||
                        (item.group_category_id && item.group_category_id.toLowerCase().includes(searchLower)) ||
                        (item.department && item.department.toLowerCase().includes(searchLower))
                    );
                }
                return true;
            })
            .sort((a, b) => {
                if (sortBy === "name") {
                    return a.model_name.localeCompare(b.model_name)
                } else if (sortBy === "office") {
                    return a.department.localeCompare(b.department)
                }
                return 0
            })
    }, [items, sortBy, filterCategory, filterOffice, filterSearch])


}