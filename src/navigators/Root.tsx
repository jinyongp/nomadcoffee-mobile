import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useTheme } from 'styled-components/native';
import AuthNavigator, { AuthNavigatorParamList } from './Auth';
import MainNavigator, { MainNavigatorParamList } from './Main';

export type RootNavigatorParamList = {
  Main: NavigatorScreenParams<MainNavigatorParamList>;
  Auth: NavigatorScreenParams<AuthNavigatorParamList>;
};

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
    >
      <Stack.Screen name="Main" component={MainNavigator} />
      <Stack.Screen name="Auth" component={AuthNavigator} />
    </Stack.Navigator>
  );
}
