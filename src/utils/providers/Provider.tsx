import { ReactNode, useMemo } from 'react';
import { configureFonts, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useAppStore } from '@store/app/useAppStore';
import { darkTheme, lightTheme } from '@theme/colors';
import { fontConfig } from '@theme/typography';
import { ApolloProvider } from '@apollo/client';
import { client } from '@graphql/index';

export const Provider = ({ children }: { children: ReactNode }) => {
    const { theme } = useAppStore();

    const paperTheme = useMemo(() => {
        if (theme === 'dark') {
            return {
                ...darkTheme,
                fonts: configureFonts({ config: fontConfig })
            };
        }
        return {
            ...lightTheme,
            fonts: configureFonts({ config: fontConfig })
        };
    }, [theme]);

    return (
        <SafeAreaProvider>
            <ApolloProvider client={client}>
                <PaperProvider theme={paperTheme}>{children}</PaperProvider>
            </ApolloProvider>
        </SafeAreaProvider>
    );
};
