'use client'

import React from "react";
import {PlusIcon} from "@heroicons/react/16/solid";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";

import {
    Sheet,
    SheetClose,
    SheetContent, SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input";
import {toast} from "sonner";

export default function LayoutHeader() {
    return (
        <header className="h-16 bg-primary-50 shadow-sm w-full rounded-tr-lg rounded-tl-lg">
            <div className="flex justify-between items-center p-4 shrink-0 h-full gap-2">
                
                <div className="flex items-center">
                    <SidebarTrigger className="size-8 px-2.5"/>
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <h1 className="font-bold truncate text-primary-900">User Management</h1>
                </div>
                
                <div className="flex items-center space-x-4">
                    
                    
                    <Sheet>
                        <SheetTrigger asChild>
                            
                            <Button
                                className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center justify-center">
                                <PlusIcon className={"size-6 shrink-0"}/>
                                <span className={"truncate"}> New User</span>
                            </Button>
                        
                        </SheetTrigger>
                        <SheetContent className={"bg-primary-700 text-primary-50 border-0"}>
                            
                            <SheetHeader>
                                <SheetTitle className={"text-primary-100"}>New User</SheetTitle>
                                <SheetDescription className={"text-primary-300"}>
                                    Creating new user, press submit when you are done.
                                </SheetDescription>
                            </SheetHeader>
                            
                            
                            <div className="grid flex-1 auto-rows-min gap-6 px-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="new-user-email">email</Label>
                                    <Input id="new-user-email" type={"email"} defaultValue="123@321.com"/>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="new-user-uname">Username</Label>
                                    <Input id="new-user-uname" defaultValue="@peduarte"/>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="new-user-pass">Password</Label>
                                    <Input id="new-user-pass" type={"password"} defaultValue="@peduarte"/>
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="new-user-repass">Re-Password</Label>
                                    <Input id="new-user-repass" type={"password"} defaultValue="@peduarte"/>
                                </div>
                            </div>
                            <SheetFooter>
                                
                                <Button type="submit"
                                        className={"bg-accent-600 hover:bg-accent-700 border-0"}
                                        onClick={() => {
                                            toast(`*Beep* New User Created`, {
                                                action: {
                                                    label: "Done",
                                                    onClick: () => {
                                                    }
                                                },
                                            })
                                        }}>
                                    Submit
                                </Button>
                                
                                <SheetClose asChild>
                                    <Button variant="outline" className={"hover:bg-primary-400"}>Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                
                </div>
            </div>
        
        </header>
    )
}