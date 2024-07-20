import { ReactNode, useCallback } from 'react';
import { Platform, ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { AvoidSoftInput, AvoidSoftInputView } from 'react-native-avoid-softinput';
import { useFocusEffect } from '@react-navigation/native';

interface KeyboardAvoidProps {
    children: ReactNode;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

export const KeyboardAvoid = ({ children, contentContainerStyle }: KeyboardAvoidProps) => {
    const onFocusEffect = useCallback(() => {
        AvoidSoftInput.setShouldMimicIOSBehavior(true);
        AvoidSoftInput.setEnabled(true);
        AvoidSoftInput.setAdjustUnspecified();

        return () => {
            AvoidSoftInput.setShouldMimicIOSBehavior(false);
            AvoidSoftInput.setEnabled(false);
            AvoidSoftInput.setAdjustUnspecified();
        };
    }, []);

    useFocusEffect(onFocusEffect);

    return (
        <AvoidSoftInputView
            easing='linear'
            hideAnimationDuration={Platform.OS === 'ios' ? 220 : 0}
            showAnimationDuration={Platform.OS === 'ios' ? 660 : 0}
            style={styles.container}
        >
            <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={[styles.scrollView, contentContainerStyle]}
            >
                {children}
            </ScrollView>
        </AvoidSoftInputView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        flexGrow: 1,
        height: 'auto'
    }
});
