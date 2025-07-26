import {RandomUserResponse} from "@/types/Users";


export async function fetchUserList(pageNum: number = 1, pageSize: number = 20): Promise<RandomUserResponse | null> {
    
    const THE_SERVER_URL_THAT_SHOULD_BE_IN_A_ENV_FILE = `https://randomuser.me/api/?inc=gender,name,email,phone,picture,nat,login&page=${pageNum}&results=${pageSize}&seed=42`;
    
    try {
        const res = await fetch(
            THE_SERVER_URL_THAT_SHOULD_BE_IN_A_ENV_FILE,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                next: {
                    revalidate: 3600,
                    tags: ['users-list'],
                }
            }
        );
        
        return await res.json();
        
    } catch (error) {
        console.error(error);
    }
    
    return null
    
}