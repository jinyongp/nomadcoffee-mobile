import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LogIn';
import SignUpScreen from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import { RootNavigatorParamList } from './Root';

export type AuthNavigatorParamList = {
  Welcome: undefined;
  LogIn: {
    username?: string;
    success?: boolean;
  };
  SignUp: undefined;
};

export type LogInScreenRouteProp = RouteProp<AuthNavigatorParamList, 'LogIn'>;

export type WelcomeScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthNavigatorParamList, 'Welcome'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;
export type LogInScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthNavigatorParamList, 'LogIn'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;
export type SignUpScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AuthNavigatorParamList, 'SignUp'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          initialParams={{ username: '', success: false }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
