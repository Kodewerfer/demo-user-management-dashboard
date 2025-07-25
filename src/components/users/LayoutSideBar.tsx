'use client'

import React, {ComponentType, useCallback, useState} from "react";
import {ChartPieIcon, Cog8ToothIcon, UserCircleIcon, WalletIcon} from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";


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
        <div className="sidebar bg-primary-900 text-white w-64 min-h-screen flex flex-col">
            <div className="p-6">
                <div className="flex items-center space-x-3">
                    <div className="bg-highlight-500 w-10 h-10 rounded-full flex items-center justify-center">
                        <span className="font-black text-white text-xs">LOGO</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">User Center</h1>
                    </div>
                </div>
            </div>
            
            <nav className="flex-1 mt-6">
                <ul className="space-y-1 px-4">
                    {ALL_SIDEBAR_OPTIONS.map((option, index) => (
                        <SideBarItems
                            key={index}
                            bIsActive={activeItemLabel === option.label}
                            ItemIcon={option.icon}
                            itemLabel={option.label}
                            OnClick={(ev, label) => handleSwitchingItem(ev, label)}
                        />
                    ))}
                
                </ul>
            </nav>
            
            <div className="p-4 border-t border-primary-800">
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
                    
                    <a href="#" className="ml-auto text-primary-400 hover:text-white">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                
                </div>
            </div>
        </div>
    )
}

function SideBarItems({ItemIcon, itemLabel, OnClick, bIsActive}: {
    ItemIcon: ComponentType<{ className?: string }>,
    itemLabel: string,
    OnClick: (ev: React.PointerEvent, label: string) => void,
    bIsActive: boolean
}) {
    return (
        <li>
            <Link href="/users"
                  onPointerDown={(ev) => OnClick(ev, itemLabel)}
                  className={`${bIsActive && 'activeItem'} flex items-center p-3 text-primary-200 hover:bg-primary-800 rounded-lg [&.activeItem]:border-l-4 [&.activeItem]:border-l-secondary-500 [&.activeItem]:bg-secondary-800`}>
                <ItemIcon className="h-6 w-6 mr-3"/>
                <span>{itemLabel}</span>
            </Link>
        </li>
    )
}