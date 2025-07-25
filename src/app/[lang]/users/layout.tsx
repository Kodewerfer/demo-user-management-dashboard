import React from "react";
import UserCenterSideBar from "@/components/users/LayoutSideBar";

import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar"
import LayoutHeader from "@/components/users/LayoutHeader";

export default async function UserCenterLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex w-full h-screen bg-primary-50">
            <SidebarProvider>
                <UserCenterSideBar/>
                <SidebarInset>
                    <LayoutHeader/>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        
        </div>
    )
}

