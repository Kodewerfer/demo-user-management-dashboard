'use client'

import React from "react";
import Link from "next/link";
import {TUser} from "@/types/Users";
import {useStore} from "@/zustand/Store";

export default function ProfileDetailLink({user, children}: { user: TUser, children: React.ReactNode }) {
    
    const {cacheItem} = useStore();
    
    return (
        <Link
            href={`/users/${user.uuid}`}
            onPointerDown={() => cacheItem(user)}
        >
            {children}
        </Link>
    
    )
}