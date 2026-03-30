// screens/EpisodeDetailScreen.js
// This screen shows detailed information about a single episode.
// It also fetches and displays a list of characters that appear in that episode.

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

export default function EpisodeDetailScreen({ route }) {

  const {episode} = route.params;
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Promise.all(
      episode.characters.map(url => 
        fetch(url).then(res => res.json()))
    ).then(list => {
      setCharacters(list);
      setLoading(false);
    }).catch(error => {
      console.log("Error fetching characters: ", error);
    });

    
  }, []);

  // While loading, show a spinner
  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View style={styles.container}>
      {/* Basic episode information */}
      <Text style={styles.title}>{episode.name}</Text>
      <Text>Air Date: {episode.air_date}</Text>
      <Text>Episode Code: {episode.episode}</Text>

      {/* Section title for characters */}
      <Text style={styles.subtitle}>Characters:</Text>

      {/* List of characters with images */}
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterRow}>
            {/* Character image */}
            <Image
              source={{ uri: item.image }}
              style={styles.characterImage}
            />
            {/* Character name */}
            <Text style={styles.characterName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

// Styles for the detail screen
const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 26, marginBottom: 10 },
  subtitle: { marginTop: 20, fontSize: 20, marginBottom: 10 },
  characterRow: {
    flexDirection: "row", // Place image and text side by side
    alignItems: "center",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the image circular
    marginRight: 15,
  },
  characterName: {
    fontSize: 16,
  },
});
