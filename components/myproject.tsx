import Link from 'next/link'
import React from 'react'
import { SiGithub, SiNextdotjs, SiJavascript, SiPython, SiTailwindcss, SiYoutube, SiPhp } from "react-icons/si";
import { Button } from './ui/button';

export default function Myproject() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-5 justify-center sm:justify-normal ">
                <Link href="/quran" className=" sm:first:col-span-2 h-80 border-2 w-full p-5 rounded-lg flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-zinc-700  transition-all duration-500 border-neutral-400/50 bg-stone-200/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md border border-dashed font-medium flex items-center justify-center group-hover:border-gray-200 transition-all"><SiGithub /></div>
                        </div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-yellow-600">New</div>
                    </div>
                    <div className="space-y-3 translate-y-28 group-hover:translate-y-0 transition-all cursor-pointer duration-500  h-32">
                        <h1 className="text-xl font-medium text-emerald-500 group-hover:text-emerald-500 transition-all">القرآن الكريم</h1>
                        <div className=" opacity-0  group-hover:opacity-100 transition-all duration-700 space-y-3">
                            {/* <p className="text-gray-400 text-sm line-clamp-2">Command Line Fundamentals: Learn essential skills for efficient navigation, file manipulation.</p> */}
                            <Button>دخول</Button>
                        </div>
                    </div>
                </Link>
                <Link href="/ratb-alattas" className=" sm:first:col-span-2 h-80 border-2 w-full p-5 rounded-lg flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-zinc-700  transition-all duration-500 border-neutral-400/50 bg-stone-200/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md border border-dashed font-medium flex items-center justify-center group-hover:border-gray-200 transition-all"><SiNextdotjs /></div>
                            <div className="h-10 w-10 rounded-md border border-dashed font-medium flex items-center justify-center group-hover:border-gray-200 transition-all"><SiTailwindcss /></div>
                        </div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-green-500">New</div>
                    </div>
                    <div className="space-y-3 translate-y-28 group-hover:translate-y-0 transition-all cursor-pointer duration-500  h-32">
                        <h1 className="text-xl font-medium text-emerald-500 group-hover:text-emerald-500 transition-all">راتب العطاس</h1>
                        <div className=" opacity-0  group-hover:opacity-100 transition-all duration-700 space-y-3">
                            {/* <p className="text-gray-400 text-sm line-clamp-2">this project you can convert iamge to text and voice to text.</p> */}
                            <Button>دخول</Button>
                        </div>
                    </div>
                </Link>
                <Link href="/electronic-rosary" className=" sm:first:col-span-2 h-80 border-2 w-full p-5 rounded-lg flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-zinc-700  transition-all duration-500 border-neutral-400/50 bg-stone-200/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md border border-dashed font-medium flex items-center justify-center group-hover:border-gray-200 transition-all">API</div>
                        </div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-green-500">New</div>
                    </div>
                    <div className="space-y-3 translate-y-28 group-hover:translate-y-0 transition-all cursor-pointer duration-500  h-32">
                        <h1 className="text-xl font-medium text-emerald-500 group-hover:text-emerald-500 transition-all">المسبحة الألكترونية</h1>
                        <div className=" opacity-0  group-hover:opacity-100 transition-all duration-700 space-y-3">
                            {/* <p className="text-gray-400 text-sm line-clamp-2">i get the complete Quran from API.</p> */}
                            <Button>دخول</Button>
                        </div>
                    </div>
                </Link>
                <Link href="/books/b1.pdf" target="_blank" className=" sm:first:col-span-2 h-80 border-2 w-full p-5 rounded-lg flex flex-col justify-between overflow-hidden group cursor-pointer hover:border-zinc-700  transition-all duration-500 border-neutral-400/50 bg-stone-200/50">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-md border border-dashed font-medium flex items-center justify-center group-hover:border-gray-200 transition-all">API</div>
                        </div>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent text-primary-foreground hover:bg-primary/80 bg-green-500">New</div>
                    </div>
                    <div className="space-y-3 translate-y-28 group-hover:translate-y-0 transition-all cursor-pointer duration-500  h-32">
                        <h1 className="text-xl font-medium text-emerald-500 group-hover:text-emerald-500 transition-all">كتاب الصحيح البخاري</h1>
                        <div className=" opacity-0  group-hover:opacity-100 transition-all duration-700 space-y-3">
                            {/* <p className="text-gray-400 text-sm line-clamp-2">i get the complete Quran from API.</p> */}
                            <Button>دخول</Button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
