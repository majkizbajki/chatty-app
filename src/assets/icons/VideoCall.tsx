import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Circle, Path, Svg } from 'react-native-svg';

interface VideoCallProps {
    style?: StyleProp<ViewStyle>;
}

export const VideoCall = ({ style }: VideoCallProps) => {
    return (
        <View style={[styles.container, style]}>
            <Svg width='100%' height='100%' viewBox='0 0 44 44' fill='none'>
                <Circle cx={22} cy={22} r={22} fill='#fff' />
                <Path
                    fill='#5603AD'
                    d='M23.643 15H12.357c-.746 0-1.357.738-1.357 1.66v10.68c0 .913.603 1.66 1.357 1.66h11.286c.746 0 1.357-.738 1.357-1.66V16.66c0-.913-.61-1.66-1.357-1.66zm8.709.205a1.307 1.307 0 0 0-1.325-.047l-3.849 2.06a1.197 1.197 0 0 0-.625 1.064v7.444c0 .451.24.855.625 1.065l3.849 2.06c.421.225.919.21 1.325-.047.407-.257.648-.707.648-1.19V16.402c0-.49-.248-.94-.648-1.196z'
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
