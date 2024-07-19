import { MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { MD3Colors } from 'react-native-paper/lib/typescript/types';

export interface Colors extends MD3Colors {
    active: string;
    blue100: string;
    blue300: string;
    blue500: string;
    black: string;
    gray300: string;
    gray500: string;
    plum300: string;
    plum500: string;
    white: string;
    whiteBlured: string;
}

const extraThemeColors = {
    active: '#A8FF76',
    blue100: '#F0F8FF',
    blue300: '#B6DEFD',
    blue500: '#259dfa',
    black: '#1A1A1A',
    gray300: '#BFC1CC',
    gray500: '#9FA2B2',
    plum300: '#993AFC',
    plum500: '#B6DEFD',
    white: '#FFFFFF',
    whiteBlured: '#F0F5FD'
};

export const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...extraThemeColors
    }
};

export const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...extraThemeColors
    }
};

export type LightAppTheme = typeof lightTheme;
export type DarkAppTheme = typeof darkTheme;
