'use client'

import React from "react";
import Link from "next/link";
import {TUser} from "@/types/Users";
import {useStore} from "@/zustand/Store";

export default function ProfileDetailLink({user, children, className}: {
    user: TUser,
    children?: React.ReactNode,
    className?: string
}) {
    
    const {cacheItem} = useStore();
    
    return (
        <Link
            href={`/users/${user.uuid}`}
            onPointerDown={() => cacheItem(user)}
            className={className}
        >
            {children}
        </Link>
    
    )
}