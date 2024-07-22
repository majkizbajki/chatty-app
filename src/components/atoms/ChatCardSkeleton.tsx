import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export const ChatCardSkeleton = () => {
    return (
        <View style={styles.container}>
            <SkeletonPlaceholder borderRadius={8}>
                <SkeletonPlaceholder.Item flexDirection='row' alignItems='center'>
                    <SkeletonPlaceholder.Item width={64} height={64} borderRadius={32} />
                    <SkeletonPlaceholder.Item marginLeft={16}>
                        <SkeletonPlaceholder.Item width={100} height={16} />
                        <SkeletonPlaceholder.Item marginTop={8} width={160} height={12} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 88,
        paddingHorizontal: 16,
        justifyContent: 'center'
    }
});
