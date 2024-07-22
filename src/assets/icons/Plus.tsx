import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface PlusProps {
    style?: StyleProp<ViewStyle>;
}

export const Plus = ({ style }: PlusProps) => {
    return (
        <View style={[styles.container, style]}>
            <Svg width='100%' height='100%' viewBox='0 0 44 44' fill='none'>
                <Circle cx={22} cy={22} r={22} fill='#fff' />
                <Path
                    fill='#5603AD'
                    d='M22 11.5a1.5 1.5 0 0 1 1.5 1.5v7.5H31a1.5 1.5 0 0 1 0 3h-7.5V31a1.5 1.5 0 0 1-3 0v-7.5H13a1.5 1.5 0 0 1 0-3h7.5V13a1.5 1.5 0 0 1 1.5-1.5z'
                />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 44,
        height: 44
    }
});
