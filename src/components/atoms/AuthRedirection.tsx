import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';
import { Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface AuthRedirectionProps {
    onPress: () => void;
    buttonText: string;
    label: string;
}

export const AuthRedirection = ({ onPress, buttonText, label }: AuthRedirectionProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <View style={style.container}>
            <Text variant='labelLarge' style={style.label}>
                {label}
            </Text>
            <Pressable onPress={onPress}>
                <Text variant='titleMedium' style={style.buttonText}>
                    {buttonText}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            gap: 8,
            alignSelf: 'center',
            alignItems: 'center'
        },
        label: {
            color: colors.white
        },
        buttonText: {
            color: colors.plum500
        }
    });
