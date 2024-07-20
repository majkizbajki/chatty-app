import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, TextInputProps } from 'react-native-paper';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';
import { Vision } from '@assets/icons/Vision';
import { VisionLow } from '@assets/icons/VisionLow';

export const PasswordInput = ({ ...props }: TextInputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <PaperTextInput
            {...props}
            activeOutlineColor={props.error ? colors.error : colors.plum500}
            autoCapitalize='none'
            dense
            mode='outlined'
            outlineColor={props.error ? colors.error : colors.white}
            outlineStyle={style.outline}
            right={
                <PaperTextInput.Icon
                    icon={() => (showPassword ? <Vision /> : <VisionLow />)}
                    onPress={() => setShowPassword(state => !state)}
                />
            }
            secureTextEntry={!showPassword}
            selectionColor={colors.plum500}
            style={[style.input, props.style]}
            textColor={colors.black}
        />
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        input: {
            textAlign: 'auto',
            backgroundColor: colors.background,
            fontSize: 14
        },
        outline: {
            borderRadius: 10
        }
    });
