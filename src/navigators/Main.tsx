import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import SearchScreen from '../screens/Search';
import { RootNavigatorParamList } from './Root';

export type MainNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  Profile: undefined;
};

export type HomeScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorParamList, 'Home'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;
export type SearchScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorParamList, 'Search'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;
export type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<MainNavigatorParamList, 'Profile'>,
  NativeStackNavigationProp<RootNavigatorParamList>
>;

const Tab = createBottomTabNavigator();

type TabBarIconProps = Parameters<BottomTabNavigationOptions['tabBarIcon']>[0];
type IoniconsNames = keyof typeof Ionicons.glyphMap;
const TabBarIcon = ({ focused }: TabBarIconProps, name: IoniconsNames) => (
  <Ionicons name={focused ? name : (`${name}-outline` as IoniconsNames)} size={20} />
);

export default function MainNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarIconStyle: { marginTop: 5 },
        tabBarLabelStyle: { marginBottom: 5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: (props) => TabBarIcon(props, 'home'), tabBarLabel: 'HOME' }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{ tabBarIcon: (props) => TabBarIcon(props, 'search'), tabBarLabel: 'SEARCH' }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: (props) => TabBarIcon(props, 'person'), tabBarLabel: 'PROFILE' }}
      />
    </Tab.Navigator>
  );
}
