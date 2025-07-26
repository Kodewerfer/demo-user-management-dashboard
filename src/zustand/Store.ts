import {create} from 'zustand';
import {TUser} from "@/types/Users";


type Store = {
    itemCache: Record<string, TUser>;
    cacheItem: (item: TUser) => void;
};

export const useStore = create<Store>((set) => ({
    itemCache: {},
    cacheItem: (item) => set((state) => ({
        itemCache: {...state.itemCache, [item.uuid]: item}
    })),
}));