import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { Header } from '@components/molecules/Header';
import { ChatList } from '@components/organisms/ChatList';
import { ScreenTemplate } from '@components/templates/ScreenTemplate';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

export const ChatListScreen = () => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();

    const style = styles(colors);

    return (
        <ScreenTemplate edges={['top']} screenStyle={style.safeArea}>
            <ScreenTemplate edges={['bottom', 'left', 'right']} screenStyle={style.screen}>
                <Header icons={['search', 'rooms']}>
                    <Text variant='headlineLarge' style={style.title}>
                        {t('chat_list.title')}
                    </Text>
                </Header>
                <ChatList />
            </ScreenTemplate>
        </ScreenTemplate>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        safeArea: {
            backgroundColor: colors.blue300
        },
        screen: {
            backgroundColor: colors.blue100
        },
        title: {
            color: colors.plum500
        }
    });
