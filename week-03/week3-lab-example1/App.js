import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { ThemeProvider } from '@rneui/themed';
import { royalTheme } from './themes/royalTheme';

import ResortNavigation from './navigation/ResortNavigation';
import UserNavigation from './navigation/UserNavigation';
import OnboardingNavigation from './navigation/OnboardingNavigation';

// import HomeScreen from './screens/HomeScreen';
// import ResortListScreen from './screens/ResortListScreen';
// import ResortDetailScreen from './screens/ResortDetailScreen';

const RootStack = createNativeStackNavigator();

export default function App() {
  // the hook that loads the font  
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
  });

  // conditional to show a spinner while the font is loading
  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#b9c8ff' />
      </View>
    );
  }

  const showOnboarding = true;

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={royalTheme}>
          <RootStack.Navigator
            screenOptions={{
              headerTitleStyle: {
                fontWeight: 'normal',
                fontFamily: 'Montserrat_400Regular',
              }
            }}
          >
            {
              (showOnboarding) ? 
              <RootStack.Screen 
                name="OnboardingNav"
                component={OnboardingNavigation}
                options={{
                  title: "Welcome to Resorts R\'Us"
                }}
              /> :
              null
            }
            <RootStack.Screen
              name="ResortNav"
              component={ResortNavigation}
              options={
                {
                  headerShown: false
                }
              }
            />
            <RootStack.Screen 
              name="UserNav"
              component={UserNavigation}
              options={{
                title: "User Section",
              }}
            />
          </RootStack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },

});