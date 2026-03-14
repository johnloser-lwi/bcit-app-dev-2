import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const STORAGE_KEY = 'star';

export default function HomeScreen() {
  const [starred, setStarred] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const stored = await AsyncStorage.getItem(STORAGE_KEY);
        if (stored !== null) setStarred(stored === 'true');
      } catch (e) {
        console.error('Failed to load star', e);
      }
    };
    load();
  }, []);

  const toggleStar = async () => {
    try {
      const next = !starred;
      await AsyncStorage.setItem(STORAGE_KEY, String(next));
      setStarred(next);
    } catch (e) {
      console.error('Failed to save star', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={toggleStar} style={styles.starButton}>
        <MaterialIcons
          name={starred ? 'star' : 'star-border'}
          size={48}
          color={starred ? '#f5a623' : '#888'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starButton: {
    marginTop: 16,
  },
});
