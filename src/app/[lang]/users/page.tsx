export async function generateMetadata() {
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
            <h1> User page</h1>
        </>
    )
}