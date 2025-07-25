'use client'

import React, {ComponentType, useCallback, useState} from "react";
import {
    AdjustmentsHorizontalIcon,
    ChartPieIcon,
    Cog8ToothIcon,
    UserCircleIcon,
    WalletIcon
} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
// ---shadcn
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarRail, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuButton, useSidebar
} from "@/components/ui/sidebar"
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"

// static mockup
const ALL_SIDEBAR_OPTIONS = [
    {
        icon: UserCircleIcon,
        label: "Users",
    },
    {
        icon: ChartPieIcon,
        label: "analytic",
    },
    {
        icon: WalletIcon,
        label: "Billing",
    },
    {
        icon: Cog8ToothIcon,
        label: "Settings",
    },
];

export default function UserCenterSideBar() {
    
    const [activeItemLabel, setActiveItemLabel] = useState<string>("Users");
    
    const handleSwitchingItem = useCallback((ev: React.PointerEvent, label: string) => {
        ev.preventDefault();
        setActiveItemLabel(label);
    }, []);
    
    return (
        <Sidebar collapsible={'icon'}>
            <SidebarHeader className={'bg-primary-800 text-primary-200'}>
                <div className="flex grow  py-6 items-center justify-center">
                    
                    <div
                        className={`bg-highlight-500 aspect-square size-12 shrink-0 rounded-full flex items-center justify-center`}>
                        <span className="font-black text-primary-200 text-xs">LOGO</span>
                    </div>
                
                </div>
            </SidebarHeader>
            <SidebarContent className={'bg-primary-800 text-primary-200'}>
                <SidebarGroup>
                    {/*<SidebarGroupLabel className={'text-primary-200'}>User</SidebarGroupLabel>*/}
                    <SidebarGroupContent>
                        <SidebarMenu>
                            
                            <React.Suspense fallback={<SidebarMenuSkeleton showIcon/>}>
                                <SideBarContent activeItemLabel={activeItemLabel} onItemClick={handleSwitchingItem}/>
                            </React.Suspense>
                        
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className={'bg-primary-800 text-primary-200'}>
                <SidebarMenu>
                    <SidebarMenuItem className={'border-t border-primary-700 py-3'}>
                        
                        <SidebarMenuButton size="lg" className={"hover:bg-primary-700"}>
                            <Avatar className={'w-10 h-10 rounded-lg'}>
                                <AvatarImage src="https://randomuser.me/api/portraits/women/46.jpg" alt={'admin'}/>
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                            
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <p className="font-medium truncate text-primary-300">Current User</p>
                                <p className="text-sm text-primary-400 truncate">123@312.com</p>
                            </div>
                            
                            <a href="#" className="ml-auto text-primary-400 hover:text-primary-200">
                                <AdjustmentsHorizontalIcon className={"size-6"}/>
                            </a>
                        
                        </SidebarMenuButton>
                    
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail
                className={"hover:bg-gradient-to-l hover:from-secondary-400 hover:to-primary-800"}/>
        </Sidebar>
    )
}

/**
 * If the options are fetched from server, this component will handle the data fetching
 * @param activeItemLabel
 * @param onItemClick
 */
function SideBarContent({activeItemLabel, onItemClick}: {
    activeItemLabel: string;
    onItemClick: (ev: React.PointerEvent, label: string) => void;
}) {
    
    const [sidebarOptions] = useState(ALL_SIDEBAR_OPTIONS); //fetch or useSWR() if from server
    
    return (
        <>
            {sidebarOptions.map((option, index) => (
                
                <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild size={"lg"}>
                        <SideBarItems
                            bIsActive={activeItemLabel === option.label}
                            ItemIcon={option.icon}
                            itemLabel={option.label}
                            OnClick={(ev, label) => onItemClick(ev, label)}
                        />
                    
                    </SidebarMenuButton>
                </SidebarMenuItem>
            
            
            ))}
        </>
    )
}

function SideBarItems({ItemIcon, itemLabel, OnClick, bIsActive}: {
    ItemIcon: ComponentType<{ className?: string }>,
    itemLabel: string,
    OnClick: (ev: React.PointerEvent, label: string) => void,
    bIsActive: boolean
}) {
    
    return (
        <Link href="/users"
              onPointerDown={(ev) => OnClick(ev, itemLabel)}
              className={`${bIsActive && 'activeItem'} flex grow text-left items-center p-3 text-primary-200 hover:bg-primary-800 rounded-lg [&.activeItem]:border-l-2 [&.activeItem]:border-l-secondary-500 [&.activeItem]:bg-secondary-800`}>
            <ItemIcon className={`size-6 shrink-0`}/>
            <span className={"truncate pl-2 leading-loose text-nowrap"}>{itemLabel}</span>
        </Link>
    )
}