'use client';

import {useRouter} from 'next/navigation';
import ErrorHandlingComponent from "@/components/ErrorHandlingComponent";


export default function UsersErrorBoundary({
                                               error,
                                               reset,
                                           }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    
    return (
        <div className="flex h-screen bg-primary-50">
            
            <div className="flex-1 flex flex-col overflow-hidden">
                
                {ErrorHandlingComponent(error, reset, router)}
            </div>
        </div>
    );
}