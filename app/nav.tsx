"use client";
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { GearIcon, PlusIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TfiMenu } from "react-icons/tfi";

export default function SheetDemo() {

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline"><TfiMenu /></Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle><h1 className="inline-flex flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
                        <span>ذخر العطاس</span>
                    </h1></SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="flex items-center justify-center">
                        <Avatar>
                            <AvatarImage src="https://ugc.production.linktr.ee/fa1b3766-47a4-47ad-9c82-2cee7e32b666_admin.jpeg?io=true&size=avatar-v3_0" />
                            <AvatarFallback>MA</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/" className=' col-span-3 text-right'>الرئيسية</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/posts" className=' text-center'>القرآن الكريم</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/posts" className=' text-center'>راتب العطاس</Link>
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button className=' w-full'>أغلق</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
