'use client';

import {useRouter} from 'next/navigation';
import ErrorHandlingComponent from "@/components/ErrorHandlingComponent";

export default function GlobalError({
                                        error,
                                        reset,
                                    }: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    const router = useRouter();
    
    return (
        <html>
        <body className="bg-primary-50 min-h-screen flex flex-col">
        
        <div className="flex-1 flex flex-col overflow-hidden">
            
            {ErrorHandlingComponent(error, reset, router)}
        </div>
        
        </body>
        </html>
    );
}