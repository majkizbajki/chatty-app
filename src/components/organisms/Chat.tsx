import { useEffect, useState } from 'react';
import { Keyboard, StyleSheet, View } from 'react-native';
import { Bubble, GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { InputBox } from '@components/molecules/InputBox';
import { useAppTheme } from '@hooks/useAppTheme';
import { useAppStore } from '@store/app/useAppStore';
import { useAuthStore } from '@store/auth/useAuthStore';
import { Colors } from '@theme/colors';
import 'dayjs/locale/pl';
import 'dayjs/locale/ar';
import 'dayjs/locale/en';

interface ChatProps {
    onSend: () => void;
    isLoading: boolean;
    messages: IMessage[];
    roomId: string;
}

export const Chat = ({ onSend, isLoading, messages, roomId }: ChatProps) => {
    const { colors } = useAppTheme();
    const { language } = useAppStore();
    const { user } = useAuthStore();
    const { bottom } = useSafeAreaInsets();

    const [inputInset, setInputInset] = useState(0);

    useEffect(() => {
        Keyboard.addListener('keyboardWillHide', () => {
            setInputInset(0);
        });
        Keyboard.addListener('keyboardWillShow', () => {
            setInputInset(bottom);
        });

        return () => {
            Keyboard.removeAllListeners('keyboardWillHide');
            Keyboard.removeAllListeners('keyboardWillShow');
        };
    }, []);

    const style = styles(colors);

    return (
        <View style={style.container}>
            <GiftedChat
                isLoadingEarlier={isLoading}
                locale={language}
                messages={messages}
                minInputToolbarHeight={64}
                renderBubble={props => (
                    <Bubble
                        {...props}
                        key={props.currentMessage?._id}
                        wrapperStyle={{
                            left: {
                                ...style.wrapper,
                                backgroundColor: colors.white,
                                borderBottomLeftRadius: 0
                            },
                            right: {
                                ...style.wrapper,
                                backgroundColor: colors.plum300,
                                borderBottomRightRadius: 0
                            }
                        }}
                    />
                )}
                renderInputToolbar={() => (
                    <View style={{ top: inputInset }}>
                        <InputBox roomId={roomId} onSend={onSend} />
                    </View>
                )}
                renderTime={() => null}
                user={{
                    _id: user.id
                }}
            />
        </View>
    );
};

const styles = (colors: Colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.blue100
        },
        wrapper: {
            borderRadius: 12,
            marginBottom: 4,
            padding: 4
        }
    });
