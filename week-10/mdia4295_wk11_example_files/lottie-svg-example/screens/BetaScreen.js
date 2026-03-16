import { useState, useRef, useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { Text, Divider, Button } from '@rneui/themed';

import LottieView from 'lottie-react-native';

export default function BetaScreen() {
  // loader source: https://lottiefiles.com/r4nvty2erk

  // play/pause state
  const [playing, setPlaying] = useState(false);

  // reference for second version
  const loaderRef = useRef(null);

  useEffect(() =>{
    if(playing){
      loaderRef.current.play();
    }
    else{
      loaderRef.current.pause();
    }
  }, [playing]);

  return (
    <View style={styles.container}>
      <Text h1 style={{ alignSelf: 'center' }}>Lottie Example</Text>

      {/* autoplay  */}      
      <View style={styles.loaderContainer}>
        <LottieView
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#fff',
          }}
          source={require('../assets/loader.json')}
        />
        <Text>Autoplay and Loop</Text>
      </View>

      {/* manual play/pause  */}      
      <View style={styles.loaderContainer}>
        <LottieView      
          autoPlay={false}    
          loop
          ref={loaderRef}        
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#fff',
          }}
          source={require('../assets/loader.json')}
        />
        <Text>Controlled by Code</Text>

        <Button 
          title={(playing) ? "PAUSE" : "PLAY"}
          onPress={() => {
            setPlaying(!playing);            
          }}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },

  loaderContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,

  }
});
