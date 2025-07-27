'use client';

import {useRouter} from 'next/navigation';
import {HomeIcon} from '@heroicons/react/24/outline';

export default function NotFound() {
    const router = useRouter();
    
    return (
        <div className="min-h-screen bg-primary-50 flex items-center justify-center p-4">
            <div className="text-center max-w-md">
                <div className="mx-auto bg-highlight-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <div className="flex">
                        <span className="text-2xl font-bold text-highlight-600">4</span>
                        <span className="text-2xl font-bold text-highlight-600">0</span>
                        <span className="text-2xl font-bold text-highlight-600">4</span>
                    </div>
                </div>
                
                <h1 className="text-2xl font-bold text-primary-900 mb-2">Page not found</h1>
                <p className="text-primary-600 mb-6">
                    {"The page you're looking for doesn't exist or has been moved."}
                </p>
                
                <button
                    onClick={() => router.push('/')}
                    className="inline-flex items-center justify-center px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-200"
                >
                    <HomeIcon className="w-5 h-5 mr-2"/>
                    Return to Homepage
                </button>
            </div>
        </div>
    );
}