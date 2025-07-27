import React from "react";
import {Metadata} from "next";

import {TUser} from "@/types/Users";
import UserProfile from "@/components/users/UserProfile";
import {_FAKE_fetchUserFromID} from "@/actions";
import UserProfileSkeleton from "@/components/users/UserProfileSkeleton";

export async function generateMetadata({params}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const {id} = await params;
    return {
        title: `Demo-User Detail ${id}`
    }
}

export default async function UserDetail({params}: { params: Promise<{ id: string, lang: string }> }) {
    
    const {lang, id: UserID} = await params;
    
    void lang; //todo:Add I18n support;
    
    return (
        <>
            
            
            <div
                className="@container/user-details flex-1 flex flex-col w-full items-center justify-start p-3 bg-primary-100 overflow-x-hidden rounded-br-lg rounded-bl-lg">
                
                
                <div className={"flex items-center grow justify-center h-12 max-h-12"}>
                    <h4 className={"my-2 font-medium text-center text-primary-400 truncate"}>data provided by
                        https://randomuser.me/</h4>
                </div>
                
                <div
                    className={'w-full @lg/user-details:w-2/3 @xl/user-details:w-1/2'}>
                    
                    <React.Suspense fallback={<UserProfileSkeleton/>}>
                        <UserProfile userID={UserID} loadUserAction={LoadSingleUserAction}/>
                    </React.Suspense>
                
                </div>
            
            </div>
        
        </>
    )
}


async function LoadSingleUserAction(userID: string): Promise<TUser | null> {
    'use server'
    return await _FAKE_fetchUserFromID(userID);
}