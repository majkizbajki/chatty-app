import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RefreshControl, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { ChatCard } from '@components/molecules/ChatCard';
import { NoData } from '@components/molecules/NoData';
import { GET_USERS_ROOMS } from '@graphql/queries/userRooms';
import { useAppTheme } from '@hooks/useAppTheme';
import { FlashList } from '@shopify/flash-list';
import { useAuthStore } from '@store/auth/useAuthStore';

export const ChatList = () => {
    const { t } = useTranslation();
    const { colors } = useAppTheme();
    const { logout } = useAuthStore();
    const { data, loading, refetch, error } = useQuery(GET_USERS_ROOMS);

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        refetch();
        setRefreshing(false);
    };

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator color={colors.plum500} />
                </View>
            ) : (
                <FlashList
                    data={data?.usersRooms?.rooms}
                    renderItem={({ item }) => (item?.id ? <ChatCard roomId={item.id} /> : null)}
                    estimatedItemSize={88}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colors.plum500} />
                    }
                    onEndReachedThreshold={0.2}
                    contentContainerStyle={styles.list}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    ListFooterComponent={() => (
                        <Button style={styles.logout} onPress={logout}>
                            {t('chat_list.log_out')}
                        </Button>
                    )}
                    ListEmptyComponent={() => {
                        if (!loading) {
                            return <NoData empty hideTitle />;
                        }
                        if (error) {
                            return <NoData onRefetch={refetch} description={error.message} />;
                        }
                        return;
                    }}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    list: {
        paddingTop: 36
    },
    separator: {
        height: 12
    },
    logout: {
        width: 96,
        alignSelf: 'center',
        marginVertical: 16
    }
});
