'use client'

import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {ArrowPathIcon, CogIcon, ExclamationTriangleIcon, HomeIcon} from "@heroicons/react/24/outline";

export default function ErrorHandlingComponent(error: Error & { digest?: string | undefined }, reset: {
    (): void
}, router: AppRouterInstance) {
    return <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-primary-50">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12">
                    
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <div
                                className="mx-auto bg-highlight-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                                <ExclamationTriangleIcon className="w-12 h-12 text-highlight-600"/>
                            </div>
                            <h1 className="text-3xl font-bold text-primary-900 mb-3">Unexpected Error</h1>
                            <p className="text-primary-600 max-w-md mx-auto">
                                We encountered an unexpected problem. Our team has been notified.
                            </p>
                        </div>
                        
                        <div className="bg-primary-50 rounded-lg p-5 mb-8 border border-primary-200">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 pt-1">
                                    <div
                                        className="bg-secondary-100 w-10 h-10 rounded-full flex items-center justify-center">
                                        <CogIcon className="w-5 h-5 text-secondary-600"/>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-secondary-700">Technical
                                        Details</h3>
                                    <div className="mt-2 text-primary-600">
                                        {process.env.NODE_ENV === 'development' ? (
                                            <div className="bg-primary-100 p-4 rounded-lg overflow-x-auto">
                                                <code
                                                    className="text-sm text-primary-800">{error.message}</code>
                                            </div>
                                        ) : (
                                            <div className="space-y-2">
                                                <p><span
                                                    className="font-medium">Error Code:</span> USR-{error.digest?.slice(0, 8) || 'UNKNOWN'}
                                                </p>
                                                <p><span
                                                    className="font-medium">Time:</span> {new Date().toLocaleTimeString()}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button
                                onClick={() => reset()}
                                className="flex items-center justify-center px-4 py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-secondary-300"
                            >
                                <ArrowPathIcon className="w-5 h-5 mr-2"/>
                                Reload Users
                            </button>
                            
                            <button
                                onClick={() => router.push('/')}
                                className="flex items-center justify-center px-4 py-3 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-300"
                            >
                                <HomeIcon className="w-5 h-5 mr-2"/>
                                Home
                            </button>
                        
                        </div>
                    
                    </div>
                </div>
            </div>
        
        </div>
    </main>;
}