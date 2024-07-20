import {
    ApolloClient,
    HttpLink,
    ApolloLink,
    InMemoryCache,
    split,
    Operation,
    NextLink,
    FetchResult
} from '@apollo/client';
import { getMainDefinition, Observable } from '@apollo/client/utilities';
import Config from 'react-native-config';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { onError } from '@apollo/client/link/error';
import { useAuthStore } from '@store/auth/useAuthStore';

if (!Config.API_URL) {
    throw new Error('API_URL is not set in configuration');
}

if (!Config.WS_URL) {
    throw new Error('WS_URL is not set in configuration');
}

const httpLink = new HttpLink({ uri: Config.API_URL });

const authMiddleware = new ApolloLink((operation: Operation, forward: NextLink): Observable<FetchResult> => {
    return new Observable(observer => {
        const { token } = useAuthStore.getState();

        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ''
            }
        });

        const subscription = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer)
        });

        return () => subscription.unsubscribe();
    });
});

const wsLink = new GraphQLWsLink(
    createClient({
        url: `${Config.WS_URL}?token=${useAuthStore.getState().token}`
    })
);

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink
);

const logoutLink = onError(({ networkError }) => {
    if (networkError && 'statusCode' in networkError && networkError.statusCode === 401) {
        useAuthStore.getState().logout();
    }
});

const link = ApolloLink.from([logoutLink, authMiddleware, splitLink]);

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
});
