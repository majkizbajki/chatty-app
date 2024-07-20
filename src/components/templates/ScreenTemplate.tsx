import { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface ScreenTemplateProps {
    children: ReactNode;
    screenStyle?: StyleProp<ViewStyle>;
}

export const ScreenTemplate = ({ children, screenStyle }: ScreenTemplateProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return <SafeAreaView style={[style.screen, screenStyle]}>{children}</SafeAreaView>;
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.background
        }
    });
