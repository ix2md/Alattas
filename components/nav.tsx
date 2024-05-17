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
                    <SheetTitle><h1 className="inline-flex flex-col gap-1 transition font-display text-3xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-emerald-400 to-yellow-300">
                        <span>ذخر العطاس</span>
                    </h1></SheetTitle>
                    <SheetDescription>
                        وقف السيد مهند احمد محسن عبدالله العطاس رضي الله عنه في الحفاظ على ممتلكات السادة آل البيت سنه 9\11\1445
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
                        <Link href="/quran" className=' text-center'>القرآن الكريم</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/ratb-alattas" className=' text-center'>راتب العطاس</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/electronic-rosary" className=' text-center'>المسبحة الألكترونية</Link>
                    </div>
                    <div className="flex items-center justify-center">
                        <Link href="/books/b1.pdf" target="_blank" className=' text-center'>كتاب الصحيح البخاري</Link>
                    </div>
                </div>
                <SheetFooter>
                    <Link href="https://linktr.ee/muhannad_alattas" target="_blank">
                        <Button className=' w-full'>تواصل معي</Button>
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
