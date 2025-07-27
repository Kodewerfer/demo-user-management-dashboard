'use client'

import React from "react"; //util css
import "@/app/layoutTransition.css";
import ViewTransition from "@/components/ViewTransitionWrapper";

export default function LayoutTransition({children}: { children: React.ReactNode }) {
    
    const DefaultExitAnimation = {}
    
    const DefaultEnterAnimation = {}
    
    return (
        <>
            <ViewTransition onUpdate={instance => {
                instance.old.animate(DefaultExitAnimation, {duration: 250})
                instance.new.animate(DefaultEnterAnimation, {duration: 500})
            }}>
                {children}
            </ViewTransition>
        </>
    )
}