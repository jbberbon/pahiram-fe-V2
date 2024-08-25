'use client'

import React, { useState, useEffect } from 'react';
import ItemCards from "@/components/borrow/item-cards";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";  

export default function PaginationComponent() {
    const [items, setItems] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetching Data in Backend but it doesn't have the get for the cookies or token to make it work so its in public 
    useEffect(() => {
        async function fetchItems(page: number) {
            try {
                const response = await fetch(`http://127.0.0.1/api/item-inventory?page=${page}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                if (data.status && data.data) {
                    setItems(data.data.items);
                    setCurrentPage(data.data.current_page);
                    setTotalPages(data.data.last_page);
                }
            } catch (error) {
                console.error('An error occurred', error);
            }
        }
        fetchItems(currentPage);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Generate pagination items with a consistent range
    const getPaginationItems = () => {
        const pageNumbers: (number | string)[] = [];
        const visiblePages = 3; // Number of pages visible before/after the current page

        // Start and end pages based on the current page and visible pages
        const startPage = Math.max(2, currentPage - visiblePages);
        const endPage = Math.min(totalPages - 1, currentPage + visiblePages);

        // Add first page and ellipsis if needed
        pageNumbers.push(1);
        if (startPage > 2) {
            pageNumbers.push('...');
        }

        // Add range of pages around current page
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }
        if (totalPages > 1) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                    <div className="flex flex-wrap gap-4">
                        {items.map(item => (
                            <div key={item.id} className="w-11/12 lg:w-5/12">
                                <ItemCards item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
              <Pagination className='p-4'>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        if (currentPage > 1) handlePageChange(currentPage - 1);
                      }} 
                    />
                  </PaginationItem>
                  {getPaginationItems().map((item, index) => (
                    item === '...' ? (
                      <PaginationItem key={index}>
                        <span className="px-2">...</span>
                      </PaginationItem>
                    ) : (
                      <PaginationItem key={index}>
                        <PaginationLink 
                          href="#" 
                          isActive={item === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(item as number);
                          }}
                        >
                          {item}
                        </PaginationLink>
                      </PaginationItem>
                    )
                  ))}
                  {totalPages > 1 && currentPage < totalPages && (
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                      />
                    </PaginationItem>
                  )}
                </PaginationContent>
              </Pagination>
            </div>
        </div>
    );
}
