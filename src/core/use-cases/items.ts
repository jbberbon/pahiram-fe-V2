import {getItemsPagination} from "@/core/data-access/items";

export const getItemsPaginationUseCase = (page: number) => {
    // TODO: Use cases before returning the items
    return getItemsPagination(page);
}