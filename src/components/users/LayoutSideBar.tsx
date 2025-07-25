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
// shadcn sidebar
import {
    Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent,
    SidebarHeader, SidebarMenu, SidebarRail, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuButton, useSidebar
} from "@/components/ui/sidebar"

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
                <div className="flex grow py-6 items-center justify-center">
                    
                    <div
                        className={`bg-highlight-500 size-12 shrink-0 rounded-full flex items-center justify-center`}>
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
                <div className="p-4 border-t border-primary-700">
                    <div className="flex items-center">
                        
                        <Image src="https://randomuser.me/api/portraits/women/46.jpg"
                               alt="Admin"
                               quality={85}
                               width={120}
                               height={120}
                               className="w-10 h-10 rounded-full"/>
                        
                        <div className="ml-3">
                            <p className="font-medium">Current User</p>
                            <p className="text-sm text-primary-400">123@312.com</p>
                        </div>
                        
                        <a href="#" className="ml-auto text-primary-400 hover:text-primary-200">
                            <AdjustmentsHorizontalIcon className={"size-6"}/>
                        </a>
                    
                    </div>
                </div>
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
                    <SidebarMenuButton asChild>
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
              className={`${bIsActive && 'activeItem'} grow flex items-center p-3 text-primary-200 hover:bg-primary-800 rounded-lg [&.activeItem]:border-l-4 [&.activeItem]:border-l-secondary-500 [&.activeItem]:bg-secondary-800`}>
            <ItemIcon className={`size-6 mr-3 shrink-0 `}/>
            <span>{itemLabel}</span>
        </Link>
    
    )
}