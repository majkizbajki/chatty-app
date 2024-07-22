import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { AuthRedirection } from '@components/atoms/AuthRedirection';
import { LoginForm } from '@components/organisms/LoginForm';
import { KeyboardAvoid } from '@components/templates/KeyboardAvoid';
import { ScreenTemplate } from '@components/templates/ScreenTemplate';
import { useAppTheme } from '@hooks/useAppTheme';
import { RootStackParamList } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';

export const LoginScreen = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const style = styles(colors);

    return (
        <ScreenTemplate screenStyle={style.screen}>
            <KeyboardAvoid contentContainerStyle={style.content}>
                <Text variant='headlineLarge' style={style.title}>
                    {t('login.title')}
                </Text>
                <Text variant='headlineMedium' style={style.label}>
                    {t('login.label')}
                </Text>
                <LoginForm />
                <AuthRedirection
                    onPress={() => navigate('RegisterScreen')}
                    buttonText={t('login.redirection.button')}
                    label={t('login.redirection.label')}
                />
            </KeyboardAvoid>
        </ScreenTemplate>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        screen: {
            backgroundColor: colors.blue300,
            paddingHorizontal: 16
        },
        title: {
            marginTop: 12,
            color: colors.plum500
        },
        label: {
            width: '80%',
            marginTop: 24,
            color: colors.white
        },
        content: {
            paddingBottom: 24
        }
    });
