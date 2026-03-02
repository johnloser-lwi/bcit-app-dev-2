import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/PorfileScreen';
import SettingsScreen from './pages/SettingsScreen';

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" size={size} color={color} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" size={size} color={color} />
        ),
      },
    },
    Settings: {
      screen: SettingsScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="settings" size={size} color={color} />
        ),
      },
    },
  },
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}
