import { SafeAreaProvider } from 'react-native-safe-area-context';

import { View, } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon, Badge } from '@rneui/themed';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

export default function App() {  
  // get the cartState from the library     

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Products"
            component={ProductScreen}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
          />          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
