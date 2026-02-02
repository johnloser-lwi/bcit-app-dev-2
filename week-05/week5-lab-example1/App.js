import { SafeAreaProvider } from 'react-native-safe-area-context';

import { View, } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon, Badge } from '@rneui/themed';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';

import { useCartState } from './states/CartState';

const Stack = createNativeStackNavigator();

export default function App() {  
  // get the cartState from the library     
  const cartState = useCartState();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerRight: () => (
              <View style={{paddingRight: 5}}>
                <Icon 
                  type='ionicon'
                  name="cart"
                />
                <Badge 
                  status="primary"
                  value={cartState.getCount()}
                  containerStyle={{position: "absolute", top: -10, left: 15}}
                />
              </View>
            )
          }}
        >
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
