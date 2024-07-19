import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { AppStore } from './types';
import { zustandStorage } from '../mmkv';

export const useAppStore = create<AppStore>()(
    persist(
        set => ({
            language: 'en',
            theme: 'light'
        }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => zustandStorage)
        }
    )
);
