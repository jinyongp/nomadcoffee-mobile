import { ApolloProvider } from '@apollo/client';
import {
  DancingScript_400Regular,
  DancingScript_500Medium,
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage, { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorageWrapper, persistCache } from 'apollo3-cache-persist';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import client, { cache, isAuthenticatedVar, tokenVar } from './apollo';
import { TOKEN_KEY } from './constants/auth';
import RootNavigator from './navigators/Root';
import { getTheme } from './styles/theme';

export default function App() {
  const { getItem } = useAsyncStorage(TOKEN_KEY);
  const [loading, setLoading] = useState(true);
  const colorScheme = useColorScheme();

  async function preload() {
    try {
      const token = await getItem();
      tokenVar(token);
      isAuthenticatedVar(!!token);
      await Promise.all([
        Font.loadAsync(Ionicons.font),
        Font.loadAsync({
          DancingScript_400Regular,
          DancingScript_500Medium,
          DancingScript_600SemiBold,
          DancingScript_700Bold,
        }),
        Font.loadAsync({
          Poppins_100Thin,
          Poppins_200ExtraLight,
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_600SemiBold,
          Poppins_700Bold,
          Poppins_800ExtraBold,
          Poppins_900Black,
        }),
      ]);
      await persistCache({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    preload().then(() => setLoading(false));
  }, []);

  return loading ? (
    <AppLoading />
  ) : (
    <ApolloProvider client={client}>
      <ThemeProvider theme={getTheme(colorScheme)}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}
