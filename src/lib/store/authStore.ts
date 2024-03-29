'use client';

import { StoreApi, UseBoundStore, create } from 'zustand';
import { UserRegisterPayload } from '@/lib/types/auth.types';
import { encryptAES } from '@/lib/utils/crypto';

const AUTH_ENCRYPTION_KEY = process.env.AUTH_ENCRYPTION_KEY || 'auth_token';

type UserState = {
    user: null | UserRegisterPayload;
    login: (user: UserRegisterPayload, hasSession?: boolean) => void;
    logout: () => void;
    isAuthenticated: () => boolean;
    error: unknown;
    setError: (error: unknown) => void;
};

const useAuthStore: UseBoundStore<StoreApi<UserState>> = create<UserState>(
    (set) => ({
        user: null,
        login: (user, hasSession = true) => {
            set({
                user,
            });

            if (!hasSession) {
                sessionStorage.setItem(
                    'USER',
                    encryptAES<UserRegisterPayload>(user, AUTH_ENCRYPTION_KEY)
                );
            }
        },
        logout: () => {
            console.log('logging out');
            set({ user: null });
            sessionStorage.setItem('USER', JSON.stringify(null));
        },
        isAuthenticated: () => !!useAuthStore.getState().user,
        error: null,
        setError: (error: unknown | null) => {
            set({ error });
        },
    })
);

export default useAuthStore;
