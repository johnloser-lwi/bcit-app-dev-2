// screens/EpisodeListScreen.js
// This screen fetches and displays all episodes from Season 1.
// It also lets the user mark episodes as favorites and saves that choice locally.

import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
// AsyncStorage lets us save small pieces of data on the device (like favorites).
import AsyncStorage from '@react-native-async-storage/async-storage';
// Reusable component for each episode row.
import EpisodeItem from '../components/EpisodeItem';

export default function EpisodeListScreen({ navigation }) {

  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  const [favorites, setFavorites] = useState({});

  const loadFavorites = async () => {
    try {
      const saved = await AsyncStorage.getItem("favorites");
      if (saved) setFavorites(JSON.parse(saved));
    } catch (error) {
      console.log("Error loading favorites: ", error);
    }
  }

  const saveFavorites = async (newFavs) => {
    try {
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavs));
    } catch (error) {
      console.log("Error saving favorites: ", error);
    }
  }

  const toggleFavorite = (id) => {
    const updated = {...favorites, [id]: !favorites[id]};
    setFavorites(updated);
    saveFavorites(favorites);
  }

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode?episode=S01")
      .then(res => res.json())
      .then(data => {
        setEpisodes(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.log("Error fetching episodes: ", error);
        setLoading(false);
      });
  }, []);

  // While loading, show a spinner
  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
      {/* FlatList is an efficient way to render a long list of items */}
      <FlatList
        data={episodes} // The array of episodes
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        renderItem={({ item }) => (
          <EpisodeItem
            episode={item}
            // Check if this episode is marked as favorite
            isFavorite={favorites[item.id]}
            // Function to call when the star is pressed
            onToggleFavorite={() => toggleFavorite(item.id)}
            // Function to call when the row is pressed (navigate to details)
            onPress={() =>
              navigation.navigate("EpisodeDetail", { episode: item })
            }
          />
        )}
      />
    </View>
  );
}
