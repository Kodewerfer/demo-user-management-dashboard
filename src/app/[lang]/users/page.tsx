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
            <div className="@container/users-list flex-1 flex flex-col w-full p-3">
                
                <div className="px-4 py-3 my-3 flex flex-row-reverse">
                    <div className={"flex items-center"}>
                        <div className="relative">
                            <input type="text" placeholder="Search..."
                                   className="bg-primary-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-primary-900"/>
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
        <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader className="text-center pb-4 relative">
                <div className="flex flex-col items-center justify-center mb-4">
                    {/*profile pic*/}
                    <Avatar className="w-20 h-20 select-none">
                        <AvatarImage src={"https://randomuser.me/api/portraits/women/42.jpg"} alt={"AABBCC"}/>
                        <AvatarFallback className="text-lg font-semibold">{"AABBCC"}</AvatarFallback>
                    </Avatar>
                    {/*name*/}
                    <CardTitle className="text-xl font-semibold text-gray-900 truncate">AABBCC</CardTitle>
                    {/*nat*/}
                    <div className="flex justify-center mt-2">
                        <Badge variant="secondary" className="text-sm">
                            <GlobeAltIcon className="w-3 h-3 mr-1"/>
                            <span className={'truncate'}>CA</span>
                        </Badge>
                    </div>
                
                </div>
                
                <CardAction className={"absolute t-0 right-4"}>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <ChevronDownIcon className={"size-6 shrink-0"}/>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CardAction>
            </CardHeader>
            
            <CardContent className="space-y-3">
                <div className="flex items-center text-gray-600">
                    <MailIcon className="w-4 h-4 mr-3 text-gray-400"/>
                    <span className="text-sm truncate">{"aaa@aa.com"}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                    <PhoneIcon className="w-4 h-4 mr-3 text-gray-400"/>
                    <span className="text-sm">{"1231231231"}</span>
                </div>
            </CardContent>
        </Card>
    )
}