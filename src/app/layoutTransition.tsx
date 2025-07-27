'use client'

import React from "react"; //util css
import "@/app/layoutTransition.css";
import ViewTransition from "@/components/ViewTransitionWrapper";

export default function LayoutTransition({children, name, onUpdateAction}: {
    children: React.ReactNode,
    name?: string,
    onUpdateAction?: (instance: React.ViewTransitionInstance, types: Array<string>) => void
}) {
    
    const DefaultExitAnimation = {}
    
    const DefaultEnterAnimation = {}
    
    const defaultOnUpdateAction = (instance: React.ViewTransitionInstance) => {
        instance.old.animate(DefaultExitAnimation, {duration: 250})
        instance.new.animate(DefaultEnterAnimation, {duration: 500})
    }
    
    return (
        <>
            <ViewTransition
                name={name}
                onUpdate={onUpdateAction ?? defaultOnUpdateAction}>
                {children}
            </ViewTransition>
        </>
    )
}