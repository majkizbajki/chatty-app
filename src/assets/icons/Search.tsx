import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface SearchProps {
    style?: StyleProp<ViewStyle>;
}

export const Search = ({ style }: SearchProps) => {
    return (
        <View style={[styles.container, style]}>
            <Svg width='100%' height='100%' viewBox='0 0 44 44' fill='none'>
                <Circle cx={22} cy={22} r={22} fill='#fff' />
                <Path
                    fill='#5603AD'
                    d='m33.4 31.35-5.695-5.724C34.55 14.326 20.763 5.2 12.79 12.783c-7.738 8.714 1.95 21.59 12.815 14.952l5.695 5.569c1.646 1.81 3.75-.3 2.1-1.955zM19.667 12.98c8.994 0 9.285 13.546 0 13.546-9.042 0-8.784-13.546 0-13.546z'
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
