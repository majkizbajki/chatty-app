import { Platform } from 'react-native';

type Font = {
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
    fontStyle?: 'normal' | 'italic' | undefined;
};

type MD3Type = {
    fontFamily?: string;
    letterSpacing?: number;
    fontWeight?: Font['fontWeight'];
    lineHeight?: number;
    fontSize?: number;
    fontStyle?: Font['fontStyle'];
};

export const fontConfig: Record<string, MD3Type> = {
    headlineLarge: {
        fontFamily: 'Poppins-Bold',
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 28,
        lineHeight: 42
    },
    headlineMedium: {
        fontFamily: 'Poppins-Bold',
        fontWeight: Platform.select({
            ios: '700'
        }),
        fontSize: 22,
        lineHeight: 33
    },
    titleLarge: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: Platform.select({
            ios: '600'
        }),
        fontSize: 16,
        lineHeight: 24
    },
    titleMedium: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: Platform.select({
            ios: '600'
        }),
        fontSize: 14,
        lineHeight: 22
    },
    titleSmall: {
        fontFamily: 'Poppins-SemiBold',
        fontWeight: Platform.select({
            ios: '600'
        }),
        fontSize: 14,
        lineHeight: 21
    },
    labelLarge: {
        fontFamily: 'SFCompactText-Regular',
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 14,
        lineHeight: 16.71
    },
    labelMedium: {
        fontFamily: 'SFCompactDisplay-Regular',
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 13,
        lineHeight: 16
    },
    bodyLarge: {
        fontFamily: 'Poppins-Regular',
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 15,
        lineHeight: 22.5
    },
    bodyMedium: {
        fontFamily: 'Poppins-Regular',
        fontWeight: Platform.select({
            ios: '400'
        }),
        fontSize: 15,
        lineHeight: 20
    }
};
