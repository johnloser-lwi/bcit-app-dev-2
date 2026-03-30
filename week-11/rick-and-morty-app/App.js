// App.js
// Main entry point for the app using classic React Navigation.

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import EpisodeListScreen from './screens/EpisodeListScreen';
import EpisodeDetailScreen from './screens/EpisodeDetailScreen';

// Create the stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Rick and Morty" }}
        />

        {/* Episode List Screen */}
        <Stack.Screen
          name="Episodes"
          component={EpisodeListScreen}
          options={{ title: "Season 1 Episodes" }}
        />

        {/* Episode Detail Screen */}
        <Stack.Screen
          name="EpisodeDetail"
          component={EpisodeDetailScreen}
          options={{ title: "Episode Details" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
