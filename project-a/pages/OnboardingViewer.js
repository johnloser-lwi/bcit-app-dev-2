import { useRef, useState } from 'react';
import { View, ScrollView, useWindowDimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardScreen_1 from './os1';
import OnBoardScreen2 from './os2';
import OnBoardScreen3 from './os3';

export default function OnboardingViewer({ onDone }) {
  const { width, height } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const slides = [OnboardScreen_1, OnBoardScreen2, OnBoardScreen3];

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const finish = async () => {
    try {
      await AsyncStorage.setItem('onboarded', 'true');
      onDone();
    } catch (e) {
      console.error('Failed to save onboarded', e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((Slide, i) => (
          <View key={i} style={{ width, height }}>
            <Slide />
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dots}>
          {slides.map((_, i) => (
            <View key={i} style={[styles.dot, i === activeIndex && styles.dotActive]} />
          ))}
        </View>

        {activeIndex === slides.length - 1 && (
          <TouchableOpacity style={styles.button} onPress={finish}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 48,
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  dots: {
    flexDirection: 'row',
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  dotActive: {
    backgroundColor: '#333',
  },
  button: {
    backgroundColor: '#333',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
