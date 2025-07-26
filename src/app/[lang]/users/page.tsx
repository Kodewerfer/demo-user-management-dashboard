import React from "react";
import {Metadata} from "next";
import Link from "next/link";

import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {ChevronDownIcon, GlobeAltIcon, MagnifyingGlassIcon, PhoneIcon} from "@heroicons/react/16/solid";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {MailIcon} from "lucide-react";

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
            <div className="@container/users-list flex-1 flex flex-col w-full p-3 bg-primary-100">
                
                <div className="px-4 py-3 my-3 flex flex-row-reverse">
                    <div className={"flex items-center"}>
                        <div className="relative">
                            <input type="text" placeholder="Search..."
                                   className="bg-primary-50 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-primary-900"/>
                            <MagnifyingGlassIcon className="absolute left-3 top-3 text-primary-400 size-4"/>
                        </div>
                    </div>
                </div>
                
                <div
                    className={'grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/users-list:grid-cols-2 @5xl/users-list:grid-cols-4'}>
                    
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                    <UserCard/>
                
                </div>
            
            </div>
        </>
    )
}

function UserCard() {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200 bg-primary-50 border border-primary-200">
            <CardHeader className="text-center pb-4 relative">
                <div className="flex flex-col items-center justify-center mb-4">
                    <Avatar className="w-20 h-20 select-none border-2 border-primary-200">
                        <AvatarImage src={"https://randomuser.me/api/portraits/women/42.jpg"} alt={""}/>
                        <AvatarFallback className="text-lg font-semibold bg-primary-100 text-primary-800">
                            {"AABBCC"}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold text-primary-900 truncate mt-2">
                        AABBCC
                    </CardTitle>
                    <div className="flex justify-center mt-2">
                        <Badge className="text-sm bg-secondary-100 select-none text-secondary-800 hover:bg-secondary-200 px-2 py-1">
                            <GlobeAltIcon className="w-3 h-3 mr-1 text-secondary-600"/>
                            <span className="truncate">CA</span>
                        </Badge>
                    </div>
                </div>
                
                <CardAction className="absolute top-4 right-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button
                                className="rounded-full p-1 hover:bg-primary-100 transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500">
                                <ChevronDownIcon className="size-5 text-primary-600"/>
                            </button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-primary-50 border border-primary-200 text-primary-800 w-48">
                            <DropdownMenuLabel className="text-primary-900 px-3 py-2 font-medium">
                                Actions
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-primary-200"/>
                            <DropdownMenuItem
                                className="px-3 py-2 hover:bg-primary-100 focus:bg-accent-50 focus:text-accent-700 cursor-pointer">
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                className="px-3 py-2 hover:bg-primary-100 focus:bg-accent-50 focus:text-accent-700 cursor-pointer">
                                Subscription
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>
            
            <CardContent className="space-y-3 pt-0">
                <div className="flex items-center text-primary-700">
                    <MailIcon className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0"/>
                    <span className="text-sm truncate">aaa@aa.com</span>
                </div>
                
                <div className="flex items-center text-primary-700">
                    <PhoneIcon className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0"/>
                    <span className="text-sm truncate">1231231231</span>
                </div>
            </CardContent>
        </Card>
    )
}