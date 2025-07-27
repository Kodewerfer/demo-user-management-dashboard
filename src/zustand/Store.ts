import {create} from 'zustand';
import {TUser} from "@/types/Users";


type Store = {
    cachedUsers: Record<string, TUser>;
    cacheUserByUUID: (item: TUser) => void;
};

export const useUserStore = create<Store>((set) => ({
    cachedUsers: {},
    cacheUserByUUID: (item) => set((state) => ({
        cachedUsers: {...state.cachedUsers, [item.uuid]: item}
    })),
}));