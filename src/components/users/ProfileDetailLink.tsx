'use client'

import React from "react";
import Link from "next/link";
import {TUser} from "@/types/Users";
import {useUserStore} from "@/zustand/Store";

export default function ProfileDetailLink({user, children, className}: {
    user: TUser,
    children?: React.ReactNode,
    className?: string
}) {
    
    const {cacheUserByUUID} = useUserStore();
    
    return (
        <Link
            href={`/users/${user.uuid}`}
            onPointerDown={() => cacheUserByUUID(user)}
            className={className}
        >
            {children}
        </Link>
    
    )
}