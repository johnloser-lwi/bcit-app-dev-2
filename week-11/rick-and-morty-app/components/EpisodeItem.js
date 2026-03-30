// components/EpisodeItem.js
// This component represents a single row in the episode list.
// It shows the episode name and a star icon to mark it as a favorite.

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Props:
// - episode: the episode object
// - isFavorite: boolean indicating if this episode is a favorite
// - onToggleFavorite: function to call when the star is pressed
// - onPress: function to call when the row itself is pressed
export default function EpisodeItem({ episode, isFavorite, onToggleFavorite, onPress }) {
  return (
    // TouchableOpacity makes the whole row clickable to go to details
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* Episode name on the left */}
      <Text style={styles.title}>{episode.name}</Text>

      {/* Star icon on the right to mark as favorite */}
      <TouchableOpacity onPress={onToggleFavorite}>
        <Text style={[styles.star, isFavorite && styles.starActive]}>
          {/* Unicode star character */}
          ★
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

// Styles for the episode row
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    flexDirection: "row", // Place title and star side by side
    justifyContent: "space-between", // Push them to opposite ends
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
  star: {
    fontSize: 24,
    color: "gray", // Default star color (not favorite)
  },
  starActive: {
    color: "gold", // Star color when marked as favorite
  },
});
