"use client";
import React, { useRef, useState, useEffect } from 'react';
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

export default function RatbAlattas() {
    const [isListening, setIsListening] = useState<boolean>(false);
    const [formattedTime, setFormattedTime] = useState<string>('');
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // إعداد مؤقت لتحديث الوقت كل ثانية
        const intervalId = setInterval(() => {
            const time = new Date();
            setFormattedTime(time.toLocaleString());
        }, 1000);

        // تنظيف المؤقت عند إلغاء التثبيت أو تحديث المكون
        return () => clearInterval(intervalId);
    }, []);

    const startListen = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsListening(true);
        }
    };

    const stopListen = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsListening(false);
        }
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
                            <BreadcrumbPage>راتب العطاس</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className='border-2 p-5 rounded-md mb-20 border-neutral-400/50 bg-stone-200/50 hover:bg-clip-padding hover:border-zinc-700'>
                <div className='flex justify-between items-center p-5'>
                    <audio ref={audioRef} src="/audio/ratb-alattas.mp3" />
                    <div className='flex'>
                        <h1 className=' sm:mr-10 text-xs sm:text-lg'>{formattedTime}</h1>
                        <div className='border border-neutral-400/50 rounded-full border-dashed hover:border-zinc-700 p-2'>
                            {isListening ? (
                                <div className='bg-green-500 rounded-full h-4 w-4 animate-pulse'></div>
                            ) : (
                                <div className='bg-red-500 rounded-full h-4 w-4 animate-pulse'></div>
                            )}
                        </div>
                    </div>
                    <div>
                        {isListening ? (
                            <Button className='ml-3' onClick={stopListen}>توقف</Button>
                        ) : (
                            <Button className='ml-3' onClick={startListen}>أبدا الأستماع</Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
