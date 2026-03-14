import { useState, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/PorfileScreen';
import SettingsScreen from './src/components/SettingsScreen';
import NotificationsScreen from './src/components/NotificationsScreen';
import OnboardingViewer from './src/components/OnboardingViewer';

// defines the bottom tab navigator with all 4 screens and their icons
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

// builds the actual navigator component from the config above
const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  // isLoading prevents a flash of the wrong screen while we check storage
  const [isLoading, setIsLoading] = useState(true);
  const [hasOnboarded, setHasOnboarded] = useState(false);

  // on first load, check if the user has already completed onboarding
  useEffect(() => {
    AsyncStorage.getItem('onboarded').then(value => {
      setHasOnboarded(value === 'true');
      setIsLoading(false);
    });
  }, []);

  // don't render anything until the storage check is done
  if (isLoading) return null;

  return (
    <SafeAreaProvider>
      {/* show onboarding on first launch, otherwise go straight to the app */}
      {hasOnboarded
        ? <Navigation />
        : <OnboardingViewer onDone={() => setHasOnboarded(true)} />}
    </SafeAreaProvider>
  );
}
