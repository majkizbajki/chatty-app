import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Path, Svg } from 'react-native-svg';

interface VisionLowProps {
    style?: StyleProp<ViewStyle>;
}

export const VisionLow = ({ style }: VisionLowProps) => {
    return (
        <View style={[styles.container, style]}>
            <Svg width='100%' height='100%' viewBox='0 0 18 18' fill='none'>
                <Path
                    d='M10.473 2.26L9.471 3.967C6.026 3.818 2.531 5.48.187 8.936c-.247.363-.25.855-.007 1.228 1.03 1.557 2.288 2.735 3.663 3.561l-.496.896c-.703 1.322 1.157 2.388 1.948 1.129L12.42 3.389c.682-1.128-1.002-2.496-1.948-1.128zM17.817 8.93c-1.15-1.73-2.573-3-4.123-3.829L12.66 6.894c1.069.608 2.113 1.484 3.097 2.65-2.07 2.416-4.384 3.611-6.708 3.611l-1.132 1.966c3.639.39 7.422-1.277 9.897-4.964.246-.362.246-.862.003-1.227z'
                    fill='#BFC1CC'
                />
                <Path d='M9.18 12.916c3.416-.351 3.54-3.66 2.819-4.886l-2.82 4.886z' fill='#BFC1CC' />
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 18,
        width: 18
    }
});
