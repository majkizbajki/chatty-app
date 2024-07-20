import { StyleSheet } from 'react-native';
import { TextInput as PaperTextInput, TextInputProps } from 'react-native-paper';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

export const TextInput = ({ ...props }: TextInputProps) => {
    const { colors } = useAppTheme();

    const style = styles(colors);

    return (
        <PaperTextInput
            {...props}
            activeOutlineColor={props.error ? colors.error : colors.plum500}
            dense
            mode='outlined'
            outlineColor={props.error ? colors.error : colors.white}
            outlineStyle={[style.outline, props.outlineStyle]}
            style={[style.input, props.style]}
            textColor={colors.black}
        />
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        input: {
            backgroundColor: colors.background,
            height: 47,
            fontSize: 14,
            lineHeight: 20
        },
        outline: {
            borderRadius: 10
        }
    });
