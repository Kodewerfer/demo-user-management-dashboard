import {Metadata} from "next";
import {BellAlertIcon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demo - User Management Dashboard",
        description: "User Management Dashboard"
    }
}

export default async function UserDashboard({params}: { params: Promise<{ lang: string }> }) {
    
    const {lang} = await params;
    
    void lang; //todo:Add I18n support;
    
    
    return (
        <>
            <div className="flex-1 flex flex-col w-full">
                
                <header className="bg-primary-50 shadow-sm w-full">
                    <div className="flex justify-between items-center p-4">
                        
                        <div className="flex items-center">
                            <button className="text-primary-500 mr-4">
                                <i className="fas fa-bars"></i>
                            </button>
                            <h1 className="text-xl font-bold text-primary-900">User Management</h1>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                            
                            <button className="relative text-primary-500">
                                <BellAlertIcon className={"size-6"}/>
                                {/*<span*/}
                                {/*    className="absolute -top-1 -right-1 bg-highlight-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">99</span>*/}
                            </button>
                            <button
                                className="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg flex items-center">
                                <i className="fas fa-plus mr-2"></i> New User
                            </button>
                        </div>
                    </div>
                    
                    <div className="border-t border-primary-100 px-4 py-3 flex flex-row-reverse">
                        <div className={"flex items-center"}>
                            <div className="relative">
                                <input type="text" placeholder="Search..."
                                       className="bg-primary-100 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-secondary-300 text-primary-900"/>
                                <MagnifyingGlassIcon className="absolute left-3 top-3 text-primary-400 size-4"/>
                            </div>
                        </div>
                    </div>
                
                </header>
                
                <main>
                    
                    <Link href="/users/123" className={"text-slate-950"}>Test:To user detail id 123</Link>
                
                </main>
            
            </div>
        </>
    )
}