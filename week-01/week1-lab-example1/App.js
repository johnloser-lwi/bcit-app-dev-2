import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';
import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

import { ThemeProvider } from '@rneui/themed';
import { royalTheme } from './themes/royalTheme';

import HomeScreen from './screens/HomeScreen';
import ResortListScreen from './screens/ResortListScreen';
import ResortDetailScreen from './screens/ResortDetailScreen';

const Stack = createNativeStackNavigator();

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

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={royalTheme}>
          <Stack.Navigator initialRouteName="Home"
            screenOptions={{
              headerTitleStyle: {
                fontWeight: 'normal',
                fontFamily: 'Montserrat_400Regular',
              }
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ResortList"
              component={ResortListScreen}
              options={{ title: 'Find your resort' }}
            />
            <Stack.Screen
              name="ResortDetail"
              component={ResortDetailScreen}
              options={{ title: 'Resort Detail' }}
            />
          </Stack.Navigator>
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