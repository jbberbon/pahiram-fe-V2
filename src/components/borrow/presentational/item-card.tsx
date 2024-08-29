import React from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader} from "@/components/ui/card";
import Image from 'next/image';
import Placeholder from '../../../../public/image-placeholder.png';
import {Button} from '../../ui/button';
import {IItem} from "@/lib/interfaces";

export interface IItemCardProps {
    item: IItem
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
    setModalItem: React.Dispatch<React.SetStateAction<IItem | undefined>>
}

export default function ItemCard({props}: { props: IItemCardProps }) {
    const {item, setShowModal, setModalItem} = props;

    const handleRequestClick = () => {
        setShowModal(true);
        setModalItem(item);
    }

    return (
        <Card className="w-full h-full flex flex-col">
            <CardHeader className="p-0">
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={item.image || Placeholder}
                        alt={item.model_name || 'item'}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                    />
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <h1 className="text-lg font-semibold mt-2 mb-1">{item.model_name || 'Item Group (Item Model)'}</h1>
                <p className="text-sm text-neutral-500 mb-2 line-clamp-2">
                    {item.description || 'No description available.'}
                </p>
                <CardDescription className="text-xs">
                    <div className="flex items-center justify-between mb-2">
                        <span>{item.office || 'No office'}</span>
                        {item.in_circulation ? (
                            <span
                                className="text-green-600 bg-green-100 px-2 py-1 rounded-full">{`${item.in_circulation} in circulation`}</span>
                        ) : (
                            <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full">Unavailable</span>
                        )}
                    </div>
                    <span>{item.category || 'No category'}</span>
                </CardDescription>
            </CardContent>
            <CardFooter className="pt-2">
                <Button onClick={handleRequestClick} className='w-full text-black'>Request to Borrow</Button>
            </CardFooter>
        </Card>
    );
}