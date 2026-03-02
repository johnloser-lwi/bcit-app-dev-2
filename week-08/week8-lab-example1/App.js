import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen.js';
import RegistrationScreen from './screens/RegistrationScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Login"
          screenOptions={{
            headerShown:false,
          }}
        >
          
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="Registration"
            component={RegistrationScreen}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
