import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { Button } from '@components/atoms/Button';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface NoDataProps {
    description?: string;
    empty?: boolean;
    hideTitle?: boolean;
    onRefetch?: () => void;
}

export const NoData = ({ description, empty, hideTitle, onRefetch }: NoDataProps) => {
    const { t } = useTranslation();
    const { colors } = useAppTheme();
    const style = styles(colors);

    return (
        <View style={style.container}>
            {!hideTitle && (
                <Text variant='titleLarge' style={style.title}>
                    {t('errors.error')}
                </Text>
            )}
            <Text variant='bodyMedium' style={style.description}>
                {empty ? t('globals.empty') : description}
            </Text>
            {onRefetch && <Button onPress={onRefetch}>{t('globals.refetch')}</Button>}
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            marginHorizontal: 16,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16
        },
        title: {
            textAlign: 'center',
            color: colors.error
        },
        description: {
            textAlign: 'center',
            color: colors.black
        }
    });
