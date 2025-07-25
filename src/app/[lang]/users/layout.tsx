import React from "react";
import UserCenterSideBar from "@/components/users/LayoutSideBar";

import {SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"

export default async function UserCenterLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full h-screen bg-primary-50">
            <SidebarProvider defaultOpen={true}>
                <UserCenterSideBar/>
                {children}
            </SidebarProvider>
        
        </div>
    )
}

