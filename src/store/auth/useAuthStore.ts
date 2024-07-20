import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthStore, State } from './types';
import { zustandStorage } from '../mmkv';

const initialState: State = {
    token: '',
    user: {
        email: '',
        firstName: '',
        id: '',
        lastName: '',
        role: 'user'
    }
};

export const useAuthStore = create<AuthStore>()(
    persist(
        set => ({
            ...initialState,
            login: ({ token, user }) => set(() => ({ token, user })),
            logout: () => set(() => initialState)
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
);
