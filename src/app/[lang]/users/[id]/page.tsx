import React from "react";
import {Metadata} from "next";

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
                className="@container/users-details flex-1 flex flex-col w-full p-3 bg-primary-100 overflow-x-hidden rounded-br-lg rounded-bl-lg">
                
                
                <div className={"flex items-center grow justify-center h-12 max-h-12"}>
                    <h4 className={"my-2 font-medium text-center text-primary-400 truncate"}>data provided by
                        https://randomuser.me/</h4>
                </div>
                
                <div
                    className={'grid grid-cols-1 gap-4 px-4 lg:px-6 @xl/users-details:grid-cols-2 @5xl/users-details:grid-cols-4 @7xl/users-list:grid-cols-5'}>
                    <h1>checking user {UserID}</h1>
                
                </div>
            
            </div>
        
        </>
    )
}