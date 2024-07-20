import { Control, Controller, FieldError } from 'react-hook-form';
import { KeyboardTypeOptions, StyleProp, StyleSheet, TextStyle, View } from 'react-native';
import { Text } from 'react-native-paper';
import { PasswordInput } from '@components/atoms/inputs/PasswordInput';
import { TextInput } from '@components/atoms/inputs/TextInput';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface FormInputProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    controler: Control<any>;
    label: string;
    name: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    errorMessage?: string;
    isError?: FieldError | boolean;
    keyboardType?: KeyboardTypeOptions;
    style?: StyleProp<TextStyle>;
    type?: 'password';
}

export const FormInput = ({
    controler,
    label,
    name,
    autoCapitalize,
    errorMessage,
    isError,
    keyboardType,
    style,
    type
}: FormInputProps) => {
    const { colors } = useAppTheme();

    const styleSheet = styles(colors);

    return (
        <View>
            <Text variant='bodyLarge' style={styleSheet.label}>
                {label}
            </Text>
            <Controller
                control={controler}
                name={name}
                render={({ field: { value, onChange, onBlur } }) => {
                    if (type === 'password') {
                        return (
                            <PasswordInput
                                error={Boolean(isError)}
                                autoCapitalize='none'
                                keyboardType={keyboardType}
                                onBlur={onBlur}
                                onChange={onChange}
                                onChangeText={onChange}
                                style={style}
                                value={value}
                            />
                        );
                    }
                    return (
                        <TextInput
                            autoCapitalize={autoCapitalize}
                            error={Boolean(isError)}
                            keyboardType={keyboardType}
                            onBlur={onBlur}
                            onChange={onChange}
                            onChangeText={onChange}
                            style={style}
                            value={value}
                        />
                    );
                }}
            />
            {isError && errorMessage && (
                <Text variant='bodySmall' style={styleSheet.errorMessage}>
                    {errorMessage}
                </Text>
            )}
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        label: {
            color: colors.whiteBlured,
            marginBottom: 4
        },
        errorMessage: {
            marginVertical: 2,
            marginHorizontal: 12,
            color: colors.error
        }
    });
