import { useTranslation } from 'react-i18next';
import { Linking, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

const URL = 'https://google.com';

export const Agreement = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();

    const style = styles(colors);

    const handleOpenWebsite = async () => {
        const supported = await Linking.canOpenURL(URL);

        if (supported) {
            await Linking.openURL(URL);
        } else {
            Toast.show({
                text1: t('errors.error'),
                text2: t('errors.wrong_url'),
                type: 'info'
            });
        }
    };

    return (
        <View style={style.container}>
            <Text variant='labelMedium' style={style.text}>
                {t('register.agreement')}
            </Text>
            <View style={style.buttonsContainer}>
                <TouchableOpacity onPress={handleOpenWebsite}>
                    <Text variant='labelMedium' style={style.url}>
                        {t('register.terms_and_conditions')}
                    </Text>
                </TouchableOpacity>
                <Text variant='labelMedium' style={style.text}>
                    {t('globals.and')}
                </Text>
                <TouchableOpacity onPress={handleOpenWebsite}>
                    <Text variant='labelMedium' style={style.url}>
                        {t('register.privacy_policy')}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        text: {
            color: colors.white
        },
        buttonsContainer: {
            flexDirection: 'row',
            gap: 4
        },
        url: {
            color: colors.blue500,
            textDecorationLine: 'underline'
        }
    });
