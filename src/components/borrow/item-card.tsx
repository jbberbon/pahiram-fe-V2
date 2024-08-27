import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader,} from "@/components/ui/card";
import Image from 'next/image';
import Placeholder from '../../../public/image-placeholder.png'; // This will be used as a fallback image
import {Button} from '../ui/button';
import {IItem} from "@/lib/interfaces";

export default function ItemCard({item}: { item: IItem }) {
    return (
        <Card className="w-full overflow-hidden">
            <CardHeader className="p-0">
                <Image
                    src={item.image || Placeholder}
                    alt={item.model_name || 'item'}
                    className="w-full h-44 rounded-t-lg object-cover"
                />
            </CardHeader>
            <CardContent>
                <h1 className="text-xl font-bold my-4">{item.model_name || 'Item Group (Item Model)'}</h1>
                <p className="text-neutral-500 mt-2 line-clamp-2">
                    {item.description || 'No description available.'}
                </p>
                <CardDescription
                    className="mt-4 flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
                    {item.in_circulation ? (
                            <span
                                className="text-green-600 bg-green-100 px-3 py-1 rounded-full whitespace-nowrap">{`{item.in_circulation} in circulation`}</span>
                        )
                        :
                        <span
                            className="text-red-600 bg-red-100 px-3 py-1 rounded-full whitespace-nowrap">Unavailable</span>}

                    <div
                        className="flex flex-col md:flex-row space-y-1 sm:space-y-0 sm:space-x-4 items-start sm:items-center flex-wrap">
                        <span className="whitespace-nowrap ml-4">{item.category || 'No category'}</span>
                        <span className="whitespace-nowrap">{item.office || 'No office'}</span>
                    </div>
                </CardDescription>
            </CardContent>
            <CardFooter>
                <Button className='w-full text-black'>Request to Borrow</Button>
            </CardFooter>
        </Card>
    );
}
