'use client'
import React, {useEffect, useState} from "react";
import {TUser} from "@/types/Users";

import {useUserStore} from "@/zustand/Store";

import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {GlobeAltIcon, PhoneIcon} from "@heroicons/react/16/solid";
import {MailIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import UserProfileSkeleton from "@/components/users/UserProfileSkeleton";
import {toast} from "sonner";

export default function UserProfile({userID, loadUserAction}: {
    userID: string,
    loadUserAction: (userID: string) => Promise<TUser | null>
}) {
    
    const {cachedUsers} = useUserStore();
    const userFromCache = cachedUsers[userID];
    
    const [displayingUser, setDisplayingUser] = useState<TUser | null | undefined>(userFromCache);
    
    useEffect(() => {
        
        if (displayingUser) return;
        
        loadUserAction(userID).then(actionResult => setDisplayingUser(actionResult));
        
    }, [displayingUser, loadUserAction, userID])
    
    
    return (
        <>
            {displayingUser ?
                <Card
                    className="@container/card-wrapper duration-200 bg-primary-50 border border-primary-200">
                    <CardHeader className="text-center pb-0 relative">
                        <div className="flex flex-col items-center justify-center mb-4">
                            
                            <Avatar className="w-40 h-40 select-none border-2 border-primary-200">
                                <AvatarImage src={displayingUser.picture.large} alt={""}/>
                                <AvatarFallback className="text-lg font-semibold bg-primary-100 text-primary-800">
                                    {displayingUser.name.first}
                                </AvatarFallback>
                            </Avatar>
                            
                            
                            <CardDescription>
                                <p className={"truncate text-lg font-medium py-2"}>Hi, My name is</p>
                            </CardDescription>
                            
                            <CardTitle className="text-xl font-semibold text-primary-900 truncate">
                                <span>{displayingUser.name.title}</span>. <span>{displayingUser.name.first} {displayingUser.name.last}</span>
                            </CardTitle>
                            
                            <div className="flex justify-center mt-4">
                                <Badge
                                    className="text-sm bg-secondary-100 select-none text-secondary-800 hover:bg-secondary-200 px-2 py-1">
                                    <GlobeAltIcon className="w-3 h-3 mr-1 text-secondary-600"/>
                                    <span className="truncate">{displayingUser.nat}</span>
                                </Badge>
                            </div>
                        </div>
                        
                        <CardAction
                            className="absolute top-0 right-4 @lg/card-wrapper:right-10 @xl/card-wrapper:right-12">
                            <Button className={"bg-highlight-600 hover:bg-highlight-800 py-1 px-2"}
                                    onClick={() => {
                                        toast(`*Beep* Subscribed to ${displayingUser.name.first}`, {
                                            action: {
                                                label: "Done",
                                                onClick: () => {
                                                }
                                            },
                                        })
                                    }}
                            >
                                <span className={"truncate w-full"}>Subscribe</span>
                            </Button>
                        </CardAction>
                    
                    </CardHeader>
                    
                    
                    <CardContent className="@container/card-content pt-0">
                        
                        <div className={"w-full grid grid-cols-1 gap-4 px-4 @lg/card-content:grid-cols-2"}>
                            
                            <div className="flex items-center justify-center text-primary-700">
                                <MailIcon className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0"/>
                                <span className="text-sm truncate">{displayingUser.email}</span>
                            </div>
                            
                            <div className="flex items-center justify-center text-primary-700">
                                <PhoneIcon className="w-4 h-4 mr-3 text-primary-500 flex-shrink-0"/>
                                <span className="text-sm truncate">{displayingUser.phone}</span>
                            </div>
                        
                        </div>
                    </CardContent>
                </Card>
                :
                <UserProfileSkeleton loadingUserFromID={userID}/>
            }
        </>
    )
}