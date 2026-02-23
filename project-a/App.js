import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StyleSheet, Text, View } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from './pages/HomeScreen';
import ProfileScreen from './pages/PorfileScreen';
import SettingsScreen from './pages/SettingsScreen';

const MyTabs = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen
  }
});

const Navigation = createStaticNavigation(MyTabs);

export default function App() {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
