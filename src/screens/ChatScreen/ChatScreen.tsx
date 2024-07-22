import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { IMessage } from 'react-native-gifted-chat';
import { Text } from 'react-native-paper';
import Feather from 'react-native-vector-icons/Feather';
import { useQuery } from '@apollo/client';
import { Header } from '@components/molecules/Header';
import { Chat } from '@components/organisms/Chat';
import { ScreenTemplate } from '@components/templates/ScreenTemplate';
import { GET_ROOM } from '@graphql/queries/room';
import { useAppTheme } from '@hooks/useAppTheme';
import { RootStackParamList } from '@navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { useAuthStore } from '@store/auth/useAuthStore';
import { Colors } from '@theme/colors';

export const ChatScreen = () => {
    const { colors } = useAppTheme();
    const {
        params: { id }
    } = useRoute<RouteProp<RootStackParamList, 'ChatScreen'>>();
    const { goBack } = useNavigation();
    const { t } = useTranslation();
    const { user } = useAuthStore();
    const { data, refetch, loading } = useQuery(GET_ROOM, { variables: { roomId: id }, pollInterval: 1000 });

    const receiverName = useMemo(() => {
        const receiverMessage = data?.room?.messages?.filter(item => item?.user?.id !== user.id).at(0);
        return receiverMessage ? `${receiverMessage.user?.firstName} ${receiverMessage.user?.lastName}` : '';
    }, [data]);

    const messages: IMessage[] = useMemo(() => {
        return (
            data?.room?.messages?.map(item => ({
                _id: item?.id ?? '',
                text: item?.body ?? '',
                createdAt: new Date(item?.insertedAt ?? ''),
                user: {
                    _id: item?.user?.id ?? ''
                }
            })) ?? []
        );
    }, [data]);

    const style = styles(colors);

    return (
        <ScreenTemplate screenStyle={style.screen}>
            <Header icons={['phone', 'videocall']}>
                <View style={style.header}>
                    <Pressable onPress={goBack}>
                        <Feather name='chevron-left' size={28} color={colors.plum500} />
                    </Pressable>
                    <View style={style.headerText}>
                        <Image source={require('../../assets/images/profile.png')} style={style.image} />
                        <View style={style.headerTextContainer}>
                            <Text variant='titleSmall' style={style.receiver}>
                                {receiverName}
                            </Text>
                            <Text variant='labelLarge' style={style.active}>
                                {t('chat.active_now')}
                            </Text>
                        </View>
                    </View>
                </View>
            </Header>
            <Chat onSend={() => refetch()} isLoading={loading} messages={messages} roomId={id} />
        </ScreenTemplate>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        screen: {
            backgroundColor: colors.blue300
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12
        },
        image: {
            width: 44,
            height: 44
        },
        headerText: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12
        },
        headerTextContainer: {
            gap: 4
        },
        receiver: {
            color: colors.plum500
        },
        active: {
            color: colors.white
        }
    });
