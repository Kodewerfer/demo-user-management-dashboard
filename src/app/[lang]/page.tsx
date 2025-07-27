import {Metadata} from "next";
import {redirect} from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Demo - Index page",
        description: "Demo"
    }
}

export default async function Home({params}: { params: Promise<{ lang: string }> }) {
    
    const {lang} = await params;
    
    void lang; //todo:Add I18n support;
    
    redirect("/users");
    
}
