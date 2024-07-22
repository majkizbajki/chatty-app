import { ReactNode } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ActivityIndicator, Button as PaperButton } from 'react-native-paper';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface ButtonProps {
    children: ReactNode;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    isLoading?: boolean;
}

export const Button = ({ children, onPress, buttonStyle, isLoading }: ButtonProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <PaperButton
            onPress={onPress}
            disabled={isLoading}
            mode='contained'
            textColor={colors.white}
            labelStyle={isLoading ? undefined : style.label}
            style={[style.button, buttonStyle]}
        >
            {isLoading ? <ActivityIndicator style={style.loading} color={colors.white} size={18} /> : children}
        </PaperButton>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        button: {
            backgroundColor: colors.plum500,
            width: '100%',
            borderRadius: 12,
            height: 48,
            justifyContent: 'center'
        },
        label: {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Poppins-SemiBold',
            fontWeight: '600',
            flex: 1,
            alignItems: 'center',
            textAlign: 'center'
        },
        loading: {
            paddingTop: 4,
            paddingLeft: '55%'
        }
    });
