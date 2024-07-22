import { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { Edges, SafeAreaView } from 'react-native-safe-area-context';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface ScreenTemplateProps {
    children: ReactNode;
    edges?: Edges;
    screenStyle?: StyleProp<ViewStyle>;
}

export const ScreenTemplate = ({ children, edges, screenStyle }: ScreenTemplateProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <SafeAreaView edges={edges} style={[style.screen, screenStyle]}>
            {children}
        </SafeAreaView>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: colors.background
        }
    });
