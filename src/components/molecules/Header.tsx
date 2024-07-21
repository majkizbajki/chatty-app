import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';
import { headerIcons, HeaderIconType } from '@utils/headerIcons';

interface HeaderProps {
    children?: ReactNode;
    icons?: HeaderIconType[];
}

export const Header = ({ children, icons }: HeaderProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <View style={style.container}>
            <View style={style.contentContainer}>{children}</View>
            <View style={style.iconsContainer}>{icons?.map(item => headerIcons[item].icon)}</View>
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            backgroundColor: colors.blue300,
            borderBottomRightRadius: 24,
            borderBottomLeftRadius: 24,
            padding: 16,
            alignItems: 'center'
        },
        contentContainer: {
            flex: 1
        },
        iconsContainer: {
            flexDirection: 'row',
            gap: 8,
            marginStart: 16
        }
    });
