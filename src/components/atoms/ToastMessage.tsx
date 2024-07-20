import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

export const ToastMessage = () => {
    const { colors } = useAppTheme();
    const { top } = useSafeAreaInsets();

    const config: ToastConfig = {
        error: ({ text1, text2 }) => (
            <View style={[style.container, { backgroundColor: colors.error }]}>
                <View>
                    <Text variant='titleSmall' style={style.text}>
                        {text1}
                    </Text>
                    <Text variant='bodySmall' style={style.text}>
                        {text2}
                    </Text>
                </View>
            </View>
        ),
        info: ({ text1, text2 }) => (
            <View style={[style.container, { backgroundColor: colors.blue500 }]}>
                <View>
                    <Text variant='titleSmall' style={style.text}>
                        {text1}
                    </Text>
                    <Text variant='bodySmall' style={style.text}>
                        {text2}
                    </Text>
                </View>
            </View>
        )
    };
    const style = styles(colors);

    return <Toast config={config} topOffset={top > 40 ? top : 40} />;
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            width: '95%',
            marginStart: 'auto',
            marginRight: 'auto',
            borderRadius: 8,
            paddingVertical: 8,
            paddingHorizontal: 12
        },
        text: {
            color: colors.white
        }
    });
