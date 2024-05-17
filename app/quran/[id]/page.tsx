import Quran from '@/components/quran';
import React, { Suspense } from 'react'

export default async function page(
    {
        params: { id },
    }: {
        params: { id: number }
    }) {
    console.log(id)
    const loadingJsx = (
        <div>
            <div className="relative flex w-64 animate-pulse gap-2 p-4">
                <div className="h-12 w-12 rounded-full bg-slate-400"></div>
                <div className="flex-1">
                    <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
                    <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
                </div>
                <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
            </div>
            <div className=' flex items-center justify-center'>
                <br />
                <hr />
                <div className="animate-pulse flex flex-col items-center gap-4 w-full">
                    <div>
                        <div className="w-48 h-6 bg-slate-400 rounded-md"></div>
                        <div className="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
                    </div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-full rounded-md"></div>
                    <div className="h-7 bg-slate-400 w-1/2 rounded-md"></div>
                </div>
            </div>
        </div>
    );
    return (
        <div>
            <Suspense fallback={loadingJsx}>
                <Quran id={id} />
            </Suspense>
        </div>
    )
}
