import { useQuery, useSubscription } from '@apollo/client';
import { ChatCardSkeleton } from '@components/atoms/ChatCardSkeleton';
import { GET_ROOM } from '@graphql/queries/room';
import { MESSAGE_ADDED_SUBSCRIPTION } from '@graphql/subscriptions/messageAdded';
import { useAppTheme } from '@hooks/useAppTheme';
import { RootStackParamList } from '@navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Colors } from '@theme/colors';
import { formatDistanceToNowShort } from '@utils/formatDistanceToNowShort';
import { useMemo } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface ChatCardProps {
    roomId: string;
}

export const ChatCard = ({ roomId }: ChatCardProps) => {
    const { colors } = useAppTheme();
    const { navigate } = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const { data, loading } = useQuery(GET_ROOM, { variables: { roomId } });

    const style = styles(colors);
    const lastMessage = useMemo(() => data?.room?.messages?.at(-1), [data]);

    if (loading) {
        return <ChatCardSkeleton />;
    }

    if (data?.room) {
        return (
            <Pressable style={style.container} onPress={() => navigate('ChatScreen', { id: roomId })}>
                <Image source={require('../../assets/images/profile.png')} style={style.image} />
                <View style={style.textContainer}>
                    {lastMessage && (
                        <Text variant='labelMedium' style={style.time}>
                            {formatDistanceToNowShort(lastMessage.insertedAt!)}
                        </Text>
                    )}
                    <Text variant='bodyMedium' style={style.text} numberOfLines={1}>
                        {data.room.name}
                    </Text>
                    <Text variant='labelLarge' style={style.text} numberOfLines={1}>
                        {lastMessage?.body}
                    </Text>
                </View>
            </Pressable>
        );
    }

    return null;
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            borderRadius: 12,
            alignItems: 'center',
            backgroundColor: colors.white,
            height: 88,
            padding: 16,
            gap: 16
        },
        image: {
            height: 64,
            width: 64,
            borderRadius: 32
        },
        textContainer: {
            flex: 1,
            gap: 4
        },
        time: {
            color: colors.gray500,
            textAlign: 'right'
        },
        text: {
            color: colors.black,
            maxWidth: '95%'
        }
    });
