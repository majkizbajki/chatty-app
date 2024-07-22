import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useMutation } from '@apollo/client';
import { Send } from '@assets/icons/Send';
import { TextInput } from '@components/atoms/inputs/TextInput';
import { SEND_MESSAGE } from '@graphql/mutations/sendMessage';
import { useAppTheme } from '@hooks/useAppTheme';
import { Colors } from '@theme/colors';

interface InputBoxProps {
    onSend: () => void;
    roomId: string;
}

export const InputBox = ({ onSend, roomId }: InputBoxProps) => {
    const { colors } = useAppTheme();
    const { t } = useTranslation();
    const [sendMessage, { loading }] = useMutation(SEND_MESSAGE, {
        onCompleted: () => {
            setMessage('');
            onSend();
        },
        onError: ({ message }) => {
            Toast.show({
                text1: t('errors.error'),
                text2: message,
                type: 'error'
            });
        }
    });

    const [message, setMessage] = useState('');

    const style = styles(colors);

    return (
        <View style={style.container}>
            <TextInput
                outlineStyle={style.outline}
                style={style.input}
                value={message}
                onChangeText={text => setMessage(text)}
            />
            <TouchableOpacity
                disabled={loading}
                onPress={() => sendMessage({ variables: { body: message, roomId } })}
                style={style.button}
            >
                {loading ? <ActivityIndicator /> : <Send />}
            </TouchableOpacity>
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            height: 64,
            alignItems: 'center',
            paddingHorizontal: 16,
            gap: 12,
            paddingTop: 4,
            backgroundColor: colors.blue300,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12
        },
        input: {
            flex: 1,
            height: 41
        },
        outline: {
            borderRadius: 12,
            borderBottomRightRadius: 0
        },
        button: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center'
        }
    });
