import React from "react";
import {PlusIcon} from "@heroicons/react/16/solid";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";

export default function LayoutHeader() {
    return (
        <header className="h-16 bg-primary-50 shadow-sm w-full rounded-tr-lg rounded-tl-lg">
            <div className="flex justify-between items-center p-4 shrink-0 h-full gap-2">
                
                <div className="flex items-center">
                    <SidebarTrigger className="size-8 px-2.5"/>
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <h1 className="font-bold truncate text-primary-900">User Management</h1>
                </div>
                
                <div className="flex items-center space-x-4">
                    
                    <button
                        className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                        <PlusIcon className={"size-6 shrink-0"}/>
                        <span className={"truncate"}> New User</span>
                    </button>
                </div>
            </div>
        
        </header>
    )
}