import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatListScreen } from '@screens/ChatListScreen/ChatListScreen';
import { ChatScreen } from '@screens/ChatScreen/ChatScreen';
import { LoginScreen } from '@screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '@screens/RegisterScreen/RegisterScreen';
import { RootStackParamList } from './types';
import { ToastMessage } from '@components/atoms/ToastMessage';
import { useAuthStore } from '@store/auth/useAuthStore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const { token } = useAuthStore();
    const [initialRoute, setInitialRoot] = useState<keyof RootStackParamList>('LoginScreen');

    useEffect(() => {
        if (!token) {
            setInitialRoot('LoginScreen');
            return;
        }

        setInitialRoot('ChatListScreen');
    }, [token]);

    const hideBootSplash = () =>
        setTimeout(async () => {
            await BootSplash.hide({ fade: true });
        }, 1000);

    return (
        <>
            <NavigationContainer onReady={hideBootSplash}>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={initialRoute}
                >
                    {token ? (
                        <Stack.Group>
                            <Stack.Screen name='ChatListScreen' component={ChatListScreen} />
                            <Stack.Screen name='ChatScreen' component={ChatScreen} />
                        </Stack.Group>
                    ) : (
                        <Stack.Group>
                            <Stack.Screen name='LoginScreen' component={LoginScreen} />
                            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
                        </Stack.Group>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
            <ToastMessage />
        </>
    );
};
