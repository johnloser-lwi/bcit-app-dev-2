import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/PorfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import NotificationsScreen from './pages/NotificationsScreen';
import OnboardingViewer from './pages/OnboardingViewer';

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
    Notifications: {
      screen: NotificationsScreen,
      options: {
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="notifications" size={size} color={color} />
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('onboarded').then(value => {
      setHasOnboarded(value === 'true');
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return null;

  return (
    <SafeAreaProvider>
      {hasOnboarded
        ? <Navigation />
        : <OnboardingViewer onDone={() => setHasOnboarded(true)} />}
    </SafeAreaProvider>
  );
}
