import {TRandomUserResponse, TUser} from "@/types/Users";
import {v4 as uuidv4} from 'uuid';

const THE_SERVER_URL_THAT_SHOULD_BE_IN_A_ENV_FILE = `https://randomuser.me/api/`;

export async function fetchUserList(pageNum: number = 1, pageSize: number = 20): Promise<TRandomUserResponse | null> {
    
    try {
        const res = await fetch(
            THE_SERVER_URL_THAT_SHOULD_BE_IN_A_ENV_FILE + `?inc=gender,name,email,phone,picture,nat,login&page=${pageNum}&results=${pageSize}&seed=42`,
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
        
        const userResponse: TRandomUserResponse = await res.json();
        
        // quick fix: rando api's own uuid maybe duplicated
        if (Array.isArray(userResponse.results)) {
            userResponse.results.map((user) => {
                user.uuid = uuidv4();
            })
        }
        
        return userResponse;
        
    } catch (error) {
        console.error(error);
    }
    
    return null
    
}

export async function _FAKE_fetchUserFromID(userID: string): Promise<TUser | null> {
    try {
        const res = await fetch(
            THE_SERVER_URL_THAT_SHOULD_BE_IN_A_ENV_FILE + `?inc=gender,name,email,phone,picture,nat,login&seed=${userID}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                next: {
                    revalidate: 3600,
                    tags: [`users-info-${userID}`],
                }
            }
        );
        
        const userResponse: TRandomUserResponse = await res.json();
        
        // quick fix: rando api's own uuid maybe duplicated
        if (Array.isArray(userResponse.results)) {
            
            userResponse.results.map((user) => {
                user.uuid = uuidv4();
            })
            return userResponse.results[0];
            
        }
        return null;
        
        
    } catch (error) {
        console.error(error);
    }
    
    return null
    
}