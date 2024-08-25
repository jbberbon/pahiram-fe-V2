'use client'
import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/borrow/breadcrumbs';
import BorrowCart from '@/components/borrow/borrow-cart';
import SearchBar from '@/components/borrow/searchbar';
import DropdownItems from '@/components/borrow/dropdown-items';
import PaginationComponent from '@/components/borrow/pagination'; // Update this import to match your actual file path

export default function BorrowItem() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('http://127.0.0.1/api/item-inventory');
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        if (data.status && data.data) {
          setItems(data.data.items); // Update state with the items array
        }
      } catch (error) {
        console.error('An error occurred', error);
      }
    }

    fetchItems(); // Call the fetch function
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="bg-white dark:bg-gray-800 h-auto rounded-lg my-5 mx-8">
        <div className="flex flex-col lg:flex-row m-4 lg:justify-between gap-4">
          <DropdownItems />
          <div className="flex-1 flex justify-center lg:justify-end">
            <SearchBar />
          </div>
        </div>

        <div className="w-full lg:w-1/3 mx-5 block lg:hidden">
          <BorrowCart />
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 m-5">
            <PaginationComponent />
          </div>
          <div className="w-full lg:w-1/3 mr-5 hidden lg:block">
            <BorrowCart />
          </div>
        </div>
      </div>
    </>
  );
}
