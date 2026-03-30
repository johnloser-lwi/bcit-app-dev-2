// screens/HomeScreen.js
// This is the first screen the user sees.
// It shows a title and a button to go to the episode list.

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// The "navigation" prop is provided automatically by React Navigation.
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Main title of the app */}
      <Text style={styles.title}>Rick and Morty</Text>

      {/* Button that takes the user to the Episodes screen */}
      <Button
        title="View Episodes"
        // When pressed, navigate to the "Episodes" screen defined in App.js
        onPress={() => navigation.navigate("Episodes")}
      />
    </View>
  );
}

// Styles for this screen
const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
  },
});
