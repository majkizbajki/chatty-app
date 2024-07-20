export type ThemeType = 'dark' | 'light';

export interface User {
    email: string;
    firstName: string;
    id: string;
    lastName: string;
    role: 'admin' | 'user';
}
