import {Metadata} from "next";
import {MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demo - User Management Dashboard",
        description: "User Management Dashboard"
    }
}

export default async function UserDashboard({params}: { params: Promise<{ lang: string }> }) {
    
    const {lang} = await params;
    
    void lang; //todo:Add I18n support;
    
    return (
        <>
            <div className="flex-1 flex flex-col w-full p-3">
                
                <div className="border-t border-primary-100 px-4 py-3 flex flex-row-reverse">
                    <div className={"flex items-center"}>
                        <div className="relative">
                            <input type="text" placeholder="Search..."
                                   className="bg-primary-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-primary-900"/>
                            <MagnifyingGlassIcon className="absolute left-3 top-3 text-primary-400 size-4"/>
                        </div>
                    </div>
                </div>
                
                <Link href="/users/123" className={"text-slate-950"}>Test:To user detail id 123</Link>
            
            </div>
        </>
    )
}