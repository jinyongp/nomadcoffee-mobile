import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUploadLink } from 'apollo-upload-client';
import { TOKEN_KEY } from './constants/auth';

export const isAuthenticatedVar = makeVar(false);
export const tokenVar = makeVar(null);

export async function loginUser(token: string) {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  isAuthenticatedVar(true);
  tokenVar(token);
}

export async function logoutUser() {
  await AsyncStorage.removeItem(TOKEN_KEY);
  isAuthenticatedVar(false);
  tokenVar(null);
}

const httpLink = createUploadLink({
  uri: 'https://nomadcoffee-jinyongp.herokuapp.com/graphql',
});

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) console.log(`GraphQL Error`, graphQLErrors);
  if (networkError) console.log('Network Error', networkError);
});

const authLink = setContext(async (_, { headers }) => {
  const authorization = await AsyncStorage.getItem(TOKEN_KEY);
  return { headers: { ...headers, authorization } };
});

const client = new ApolloClient({
  link: authLink.concat(onErrorLink).concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
