import Image from "next/image";
import {Metadata} from "next";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demo - Index page",
        description: "Demo"
    }
}

export default async function Home({params}: { params: Promise<{ lang: string }> }) {
    
    const {lang} = await params;
    
    void lang; //todo:Add I18n support;
    
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <Link href="/users">Test:To UserCetner</Link>
            </main>
        
        </div>
    );
}
