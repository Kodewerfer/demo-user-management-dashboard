'use client'

import React, {useCallback, useEffect, useRef, useState} from "react";
import {TPagingInfo} from "@/types/Users";
import {useInView} from "react-intersection-observer";
import {ArrowPathIcon} from "@heroicons/react/16/solid";

export default function LoadMoreUsers({initialMetaData, loadAction, className}: {
    className?: string;
    initialMetaData: TPagingInfo,
    loadAction: (pageNum: number) => Promise<{
        elements: React.JSX.Element[],
        meta: TPagingInfo
    } | null>
}) {
    
    const UserListMetaDataRef = useRef(initialMetaData);
    
    const [bShouldShowIcon, setBShouldShowIcon] = useState(true);
    
    const [currentPage, setCurrentPage] = useState(initialMetaData.page || 1);
    const [proceedingContent, setProceedingContent] = useState<React.JSX.Element[]>([]);
    
    
    const {ref: inViewRef, inView} = useInView();
    
    
    // loading the next page "normally"
    const loadAdditionalUsers = useCallback(async () => {
        
        if (!initialMetaData || !initialMetaData.page || !initialMetaData.results) {
            return;
        }
        
        // the rando data does not have a page count
        // if (currentPage >= initialMetaData?.pagination?.pageCount)
        //     return;
        
        
        const actionResult = await loadAction(currentPage + 1);
        
        if (!actionResult) {
            console.error("LoadMore Posts: Loading action result is empty", actionResult);
            return;
        }
        
        const {elements, meta} = actionResult;
        
        if (!elements || !meta || !meta.page || !meta.results) return;
        
        UserListMetaDataRef.current = meta;
        
        setProceedingContent(prev => [...prev, ...elements]);
        setCurrentPage(meta.page);
        
    }, [currentPage, loadAction, initialMetaData]);
    
    // in view, load more
    useEffect(() => {
        if (!inView) return;
        
        console.info("Viewing end of the current page");
        
        loadAdditionalUsers();
        
    }, [inView, loadAdditionalUsers]);
    
    useEffect(() => {
        if (!initialMetaData || !initialMetaData.page || !initialMetaData.results) {
            setBShouldShowIcon(false);
            return;
        }
        
        // the rando data does not have a page count
        // if (currentPage >= initialMetaData.pagination.pageCount)
        //     setBShouldShowIcon(false);
        
    }, [currentPage, initialMetaData]);
    
    return (
        <>
            {...proceedingContent}
            {
                bShouldShowIcon &&
                <div
                    ref={inViewRef}
                    className={`flex items-center justify-center py-4 w-full ${className}`}>
                    <ArrowPathIcon className={`h-10 w-10 animate-spin text-secondary-600`}/>
                </div>
            }
        
        </>
    )
}