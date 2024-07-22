import Config from 'react-native-config';
import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { useAuthStore } from '@store/auth/useAuthStore';
import { createClient } from 'graphql-ws';
import { setContext } from '@apollo/client/link/context';

if (!Config.API_URL) {
    throw new Error('API_URL is not set in configuration');
}

if (!Config.WS_URL) {
    throw new Error('WS_URL is not set in configuration');
}

const httpLink = new HttpLink({ uri: Config.API_URL });

const authLink = setContext((_, { headers }) => {
    const { token } = useAuthStore.getState();
    return {
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : ''
        }
    };
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: `${Config.WS_URL}`,
        connectionParams: {
            token: useAuthStore.getState().token
        }
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    authLink.concat(httpLink)
);

const logoutLink = onError(({ networkError }) => {
    if (networkError && 'statusCode' in networkError && networkError.statusCode === 401) {
        useAuthStore.getState().logout();
    }
});

const link = logoutLink.concat(splitLink);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link
});
