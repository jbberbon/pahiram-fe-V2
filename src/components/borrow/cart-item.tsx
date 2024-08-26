import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import Placeholder from '../../../public/image-placeholder.png';
import { Button } from '../ui/button';

export default function CartItem() {
  return (
    <Card className="w-full rounded-lg">
        <div className='flex items-center justify-between h-fit overflow-y-auto'>
            <div className="flex flex-col items-start">
                <div className="flex items-center">
                    <Image src={Placeholder} alt="item" className="w-16 h-16 rounded-lg object-cover" />
                    <div className="ml-4 mt-4 flex flex-col w-3/5 truncate">
                        <h1>
                            Item group (Item model) hadada asdas
                        </h1>

                        <div className="flex items-center justify-between ">
                            <h1 className="font-normal text-lg text-slate-600 dark:text-gray-400">3</h1>
                            <Button 
                                variant="link" 
                                className=" text-slate-600 dark:text-gray-400 hover:underline p-0"
                            >
                                Click to Edit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-shrink-0">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-14 w-8 cursor-pointer hover:text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </div>
        </div>
    </Card>
  )
}
