import {Metadata} from "next";

export async function generateMetadata({params}: {
    params: Promise<{ id: string }>
}): Promise<Metadata> {
    const {id} = await params;
    return {
        title: `Demo-User Detail ${id}`
    }
}

export default async function UserDetail({params}: { params: Promise<{ id: string, lang: string }> }) {
    
    const {lang, id: UserID} = await params;
    
    void lang; //todo:Add I18n support;
    
    return (
        <>
            <h1>checking user {UserID}</h1>
        </>
    )
}