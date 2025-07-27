'use client'

import React from "react";
import {toast} from "sonner"
import {Input} from "@/components/ui/input";
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";

export default function ListPageSearch() {
    return (
        <div className={"flex items-center"}
             onClick={() => {
                 toast("Since the listing uses infinite scrolling, a search functionality must be implemented on the server‑side.", {
                     action: {
                         label: "Done",
                         onClick: () => {
                         }
                     },
                 })
             }}
        >
            <div className="relative">
                <Input type="text"
                       placeholder="Search..."
                       disabled={true}
                       className="bg-primary-50 rounded-lg py-2 px-4 pl-10 text-primary-900"/>
                <MagnifyingGlassIcon className="absolute left-3 top-3 text-primary-400 size-4"/>
            </div>
        </div>
    )
}