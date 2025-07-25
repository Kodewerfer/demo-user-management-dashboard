import React from "react";
import UserCenterSideBar from "@/components/users/LayoutSideBar";

export default async function UserCenterLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full h-screen bg-primary-50">
            
            <UserCenterSideBar/>
            
            {children}
        
        </div>
    )
}

