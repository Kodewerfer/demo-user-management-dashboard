import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card";
import {Skeleton} from "@/components/ui/skeleton";
import {Badge} from "@/components/ui/badge";
import {GlobeAltIcon} from "@heroicons/react/16/solid";
import React from "react";

export default function UserProfileSkeleton() {
    return (
        <Card
            className="@container/card-wrapper duration-200 bg-primary-50 border border-primary-200">
            <CardHeader className="text-center pb-0 relative">
                <div className="flex flex-col items-center justify-center mb-4">
                    
                    <Skeleton className="w-20 h-20 rounded-full select-none border-2 border-primary-200"/>
                    
                    <CardDescription>
                        <p className={"truncate text-lg font-medium py-2"}>Hi, My name is</p>
                    </CardDescription>
                    
                    <Skeleton className="text-xl font-semibold h-6 text-primary-900 truncate"/>
                    
                    <div className="flex justify-center mt-4">
                        <Badge
                            className="text-sm bg-secondary-100 select-none text-secondary-800 hover:bg-secondary-200 px-2 py-1">
                            <GlobeAltIcon className="w-3 h-3 mr-1 text-secondary-600"/>
                            <Skeleton className="h-4 w-4"/>
                        </Badge>
                    </div>
                </div>
            </CardHeader>
            
            
            <CardContent className="@container/card-content pt-0">
                
                <div className={"w-full grid grid-cols-1 gap-4 px-4 @lg/card-content:grid-cols-2"}>
                    
                    <Skeleton className="flex items-center justify-center text-primary-700 h-4 w-full"/>
                    
                    <Skeleton className="flex items-center justify-center text-primary-700 h-4 w-full"/>
                
                </div>
            </CardContent>
        </Card>
    )
}