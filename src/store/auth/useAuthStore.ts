import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AuthStore, State } from './types';
import { zustandStorage } from '../mmkv';
import { client } from '@graphql/index';

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
            logout: () => {
                client.clearStore();
                set(() => initialState);
            }
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
);
