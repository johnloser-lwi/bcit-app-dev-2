import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Icon } from '@rneui/themed';

import HomeScreen from '../screens/HomeScreen';
import ResortListScreen from '../screens/ResortListScreen';
import ResortDetailScreen from '../screens/ResortDetailScreen';

const ResortStack = createNativeStackNavigator();

export default function ResortNavigation({ navigation }) {

    return (
        <ResortStack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerTitleStyle: {
                    fontWeight: 'normal',
                    fontFamily: 'Montserrat_400Regular',
                }
            }}
        >
            <ResortStack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <ResortStack.Screen
                name="ResortList"
                component={ResortListScreen}
                options={{ 
                    title: 'Find your resort',
                    headerRight: () => (
                        <Icon
                            style={{ color: '#440e62' }}
                            name='person-circle'
                            type='ionicon'
                            onPress={() => navigation.navigate('UserNav', {
                                screen: 'Favorites',
                            })}
                        />
                    ),
                }}
            />
            <ResortStack.Screen
                name="ResortDetail"
                component={ResortDetailScreen}
                options={{ title: 'Resort Detail' }}
            />            
        </ResortStack.Navigator>
    );
}