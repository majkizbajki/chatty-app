import { AuthRedirection } from '@components/atoms/AuthRedirection';
import { RegisterForm } from '@components/organisms/RegisterForm';
import { KeyboardAvoid } from '@components/templates/KeyboardAvoid';
import { ScreenTemplate } from '@components/templates/ScreenTemplate';
import { useAppTheme } from '@hooks/useAppTheme';
import { RootStackParamList } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export const RegisterScreen = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const style = styles(colors);

    return (
        <ScreenTemplate screenStyle={style.screen}>
            <KeyboardAvoid contentContainerStyle={style.content}>
                <Text variant='headlineLarge' style={style.title}>
                    {t('register.title')}
                </Text>
                <RegisterForm />
                <AuthRedirection
                    onPress={() => navigate('LoginScreen')}
                    buttonText={t('register.redirection.button')}
                    label={t('register.redirection.label')}
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
            color: colors.plum500
        },
        content: {
            paddingBottom: 24
        }
    });
