import { useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatListScreen } from '@screens/ChatListScreen/ChatListScreen';
import { ChatScreen } from '@screens/ChatScreen/ChatScreen';
import { LoginScreen } from '@screens/LoginScreen/LoginScreen';
import { RegisterScreen } from '@screens/RegisterScreen/RegisterScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
    const [initialRoute, setInitialRoot] = useState<keyof RootStackParamList>('RegisterScreen');

    const hideBootSplash = () =>
        setTimeout(async () => {
            await BootSplash.hide({ fade: true });
        }, 1000);

    return (
        <NavigationContainer onReady={hideBootSplash}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={initialRoute}
            >
                <Stack.Screen name='ChatListScreen' component={ChatListScreen} />
                <Stack.Screen name='ChatScreen' component={ChatScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
                <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
