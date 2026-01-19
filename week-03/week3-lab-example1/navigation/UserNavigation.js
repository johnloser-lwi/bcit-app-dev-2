import { Icon } from '@rneui/themed';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import UserFavoriteScreen from '../screens/UserFavoriteScreen';
import UserReservationScreen from '../screens/UserReservationScreen';
import UserSettingScreen from '../screens/UserSettingScreen';

const UserTab = createBottomTabNavigator();

export default function UserNavigation({ navigation }) {

    return (
        <UserTab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#440e62',
                tabBarInactiveTintColor: '#cccccc',
                headerShown: false,
            }}
        >
            <UserTab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='heart-circle-outline'
                            type='ionicon'
                            color={color} size={size} />
                    ),
                }}
                name="Favorites"
                component={UserFavoriteScreen}
            />
            <UserTab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='cart-outline'
                            type='ionicon'
                            color={color} size={size} />
                    ),
                }}
                name="Reservations"
                component={UserReservationScreen}
            />
            <UserTab.Screen
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon
                            name='settings-outline'
                            type='ionicon'
                            color={color} size={size} />
                    ),
                }}
                name="Settings"
                component={UserSettingScreen}
            />
        </UserTab.Navigator>
    );
}
