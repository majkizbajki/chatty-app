import { ScreenTemplate } from '@components/templates/ScreenTemplate';
import { useAppTheme } from '@hooks/useAppTheme';
import { useAuthStore } from '@store/auth/useAuthStore';
import { Colors } from '@theme/colors';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export const ChatListScreen = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();
    const { logout } = useAuthStore();

    const style = styles(colors);

    return (
        <ScreenTemplate screenStyle={style.screen}>
            <Button onPress={logout}>{t('chat_list.log_out')}</Button>
        </ScreenTemplate>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        screen: {
            backgroundColor: colors.blue100
        }
    });
