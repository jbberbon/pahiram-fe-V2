import {getItem, getItemsPagination} from "@/core/data-access/items";

export const getItemUseCase = (id: string) => {
    // TODO: Use cases before returning the item
    return getItem(id);
}

export const getItemsPaginationUseCase = (page: number) => {
    // TODO: Use cases before returning the items
    return getItemsPagination(page);
}