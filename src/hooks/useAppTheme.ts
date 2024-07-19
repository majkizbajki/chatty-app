import { useTheme } from 'react-native-paper';
import { useAppStore } from '@store/app/useAppStore';
import { DarkAppTheme, LightAppTheme } from '@theme/colors';

export const useAppTheme = () => {
    const { theme } = useAppStore();

    type Theme = typeof theme extends 'dark' ? DarkAppTheme : LightAppTheme;

    return useTheme<Theme>();
};
