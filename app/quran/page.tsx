import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link';
import React from 'react'

interface Surah {
    number: number;
    name: string;
    englishName: string;
}

export default async function page() {
    const res = await fetch('http://api.alquran.cloud/v1/quran/quran-uthmani', {
        next: {
            revalidate: 120,
        },
    });
    const data = await res.json();
    const surahs: Surah[] = data.data.surahs; // Extract surahs array from data
    return (
        <>
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
                            <BreadcrumbPage>القرآن الكريم</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {surahs.map((surah, i) => (
                    <Link key={i} href={`/quran/${surah.number}`} className='h-36 text-xl font-medium flex items-center justify-center text-emerald-500 border-2 w-full p-5 rounded-lg flex-col overflow-hidden group cursor-pointer hover:border-zinc-700 transition-all duration-500 border-neutral-400/50 bg-stone-200/50'>
                        <h1>{surah.name}</h1>
                    </Link>
                ))}
            </div>
        </>
    )
}

