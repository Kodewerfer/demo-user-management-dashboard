import React from "react";
import {Metadata} from "next";

import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Skeleton} from "@/components/ui/skeleton"
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
import {fetchUserList} from "@/actions";
import {TUser} from "@/types/Users";
import LoadMoreUsers from "@/components/users/LoadMoreUsers";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demo - User Management Dashboard",
        description: "User Management Dashboard"
    }
}

export default async function UserDashboard({params}: { params: Promise<{ lang: string }> }) {
    
    const {lang} = await params;
    
    void lang; //todo:Add I18n support;
    
    const userListFirstPage = await fetchUserList(1);
    const bIsUserDataValid = userListFirstPage && Array.isArray(userListFirstPage.results);
    
    return (
        <>
            <div className="@container/users-list flex-1 flex flex-col w-full p-3 bg-primary-100 overflow-x-hidden">
                
                <div className="px-4 py-3 my-3 flex flex-row-reverse">
                    <div className={"flex items-center"}>
                        <div className="relative">
                            <input type="text" placeholder="Search..."
                                   className="bg-primary-50 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-primary-900"/>
                            <MagnifyingGlassIcon className="absolute left-3 top-3 text-primary-400 size-4"/>
                        </div>
                    </div>
                </div>
                
                
                <div className={"flex items-center grow justify-center h-12"}>
                    <h4 className={"my-2 font-medium text-center text-primary-400 truncate"}>data provided by
                        https://randomuser.me/</h4>
                </div>
                
                <div
                    className={'grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/users-list:grid-cols-2 @5xl/users-list:grid-cols-4 @7xl/users-list:grid-cols-5'}>
                    
                    
                    <React.Suspense fallback={<UserCardSkeleton count={20}/>}>
                        {bIsUserDataValid && userListFirstPage.results.map((user, index) => (
                            <UserCard key={user.login.uuid + Math.random()} user={user}/>
                        ))}
                    </React.Suspense>
                    
                    {bIsUserDataValid && userListFirstPage.info &&
                        <LoadMoreUsers initialMetaData={userListFirstPage.info} loadAction={LoadMoreUsersAction}
                                       className={'col-span-1 @xl/users-list:col-span-2 @5xl/users-list:col-span-4 @7xl/users-list:col-span-5'}/>
                    }
                
                </div>
            
            </div>
        </>
    )
}

function UserCardSkeleton({count = 1}: { count: number }) {
    
    return (
        <>
            {
                Array.from({length: count}).map((_, index) => (
                    <Card key={index}
                          className="hover:shadow-lg transition-shadow duration-200 bg-primary-50 border border-primary-200">
                        <CardHeader className="text-center pb-4 relative">
                            <div className="flex flex-col items-center justify-center mb-4">
                                
                                <Skeleton className={'w-20 h-20 rounded-full mb-2'}/>
                                
                                <Skeleton className={'w-40 h-10 mb-10'}/>
                            
                            </div>
                        
                        </CardHeader>
                        
                        <CardContent className="space-y-3 pt-0">
                            <Skeleton className={'w-full h-4 my-0.5'}/>
                            <Skeleton className={'w-full h-4'}/>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
    
}

function UserCard({user}: { user: TUser }) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-200 bg-primary-50 border border-primary-200">
            <CardHeader className="text-center pb-4 relative">
                <div className="flex flex-col items-center justify-center mb-4">
                    <Avatar className="w-20 h-20 select-none border-2 border-primary-200">
                        <AvatarImage src={user.picture.medium} alt={""}/>
                        <AvatarFallback className="text-lg font-semibold bg-primary-100 text-primary-800">
                            {user.name.first}
                        </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl font-semibold text-primary-900 truncate mt-2">
                        {user.name.first} {user.name.last}
                    </CardTitle>
                    <div className="flex justify-center mt-2">
                        <Badge
                            className="text-sm bg-secondary-100 select-none text-secondary-800 hover:bg-secondary-200 px-2 py-1">
                            <GlobeAltIcon className="w-3 h-3 mr-1 text-secondary-600"/>
                            <span className="truncate">{user.nat}</span>
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
                    <span className="text-sm truncate">{user.email}</span>
                </div>
                
                <div className="flex items-center text-primary-700">
                    <PhoneIcon className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0"/>
                    <span className="text-sm truncate">{user.phone}</span>
                </div>
            </CardContent>
        </Card>
    )
}

async function LoadMoreUsersAction(page: number) {
    'use server'
    
    if (!page) {
        return null;
    }
    
    const newUsersList = await fetchUserList(page);
    
    if (!newUsersList || !newUsersList.results) {
        return null;
    }
    
    return {
        elements: newUsersList.results.map((user) => (
            <UserCard key={user.login.uuid + Math.random()} user={user}/>
        ))
        , meta: newUsersList.info
    }
}