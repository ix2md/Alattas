"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link';

export default function Rosary() {
    const [count, setCount] = useState<number>(0);

    const startCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <div className=' mb-14'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">الرئيسية</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>المسبحة الألكترونية</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='border-2 p-5 rounded-md mb-20 border-neutral-400/50 bg-stone-200/50 hover:bg-clip-padding hover:border-zinc-700'>
                <div className='flex justify-between items-center p-5'>
                    <div className='border border-neutral-400/50 rounded-full border-dashed hover:border-zinc-700 p-2'>
                        {count}
                    </div>
                    <div>
                        <Button className='ml-3' onClick={startCount}>أبدا بالتسبيح</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
