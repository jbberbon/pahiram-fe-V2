import React from 'react';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface ItemsPaginationProps {
    currentPage: number;
    totalPages: number;
}

const ItemsPagination: React.FC<ItemsPaginationProps> = ({currentPage, totalPages}) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    {currentPage > 1 ? (
                        <PaginationPrevious href={`?page=${currentPage - 1}`}/>
                    ) : (
                        <PaginationPrevious className="pointer-events-none opacity-50" href={''}/>
                    )}
                </PaginationItem>

                {pageNumbers.map((number) => (
                    <PaginationItem key={number}>
                        <PaginationLink
                            isActive={currentPage === number}
                            className={currentPage === number ? 'pointer-events-none' : ''}
                            href={`?page=${number}`}>
                            {number}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                <PaginationItem>
                    {currentPage < totalPages ? (
                        <PaginationNext href={`?page=${currentPage + 1}`}/>
                    ) : (
                        <PaginationNext className="pointer-events-none opacity-50" href={''}/>
                    )}
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default ItemsPagination;