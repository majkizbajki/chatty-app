import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Circle, G, Mask, Path, Svg } from 'react-native-svg';

interface ProfileProps {
    style?: StyleProp<ViewStyle>;
}

export const Profile = ({ style }: ProfileProps) => {
    return (
        <View style={[styles.container, style]}>
            <Svg width='100%' height='100%' viewBox='0 0 64 64' fill='none'>
                <Circle cx={32} cy={32} r={32} fill='#E9EAEE' />
                <Mask id='a' width={64} height={64} x={0} y={0} maskUnits='userSpaceOnUse'>
                    <Circle cx={32} cy={32} r={32} fill='#E9EAEE' />
                </Mask>
                <G fill='#BFC1CC' mask='url(#a)'>
                    <Path d='M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12zm0 0c19.33 0 35 15.67 35 35s-15.67 35-35 35S-3 86.33-3 67s15.67-35 35-35z' />
                </G>
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64
    }
});
