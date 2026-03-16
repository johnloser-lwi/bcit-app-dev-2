import { useVideoPlayer, VideoView, } from 'expo-video';

import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';

// just like images need a require block for local assets
const bgVideoSource = require('../assets/backgroundvideo.mp4');

export default function AlphaScreen() {
  
  // hook to instantiate the player to be added to the VideoView
  const player = useVideoPlayer(bgVideoSource, player => {
    player.loop = true;
    player.play();
    player.muted = true;
  });

  return (
    <View style={styles.container}>
      
      {/* the video is loaded into a VideoView */}
      <VideoView
        style={styles.video}
        player={player}
        allowsFullscreen
        contentFit="fill"
        nativeControls={false}
      />

      {/* content goes into the view set with the overlay style (see below) */}
      <View style={styles.overlay}>
        <Text h1 style={styles.overlayText}>
          Background Video
        
        </Text>
        <Text style={styles.overlayText}>
          Add your content to this overlay area
        </Text>

      </View>
    </View>
  );
}

/**
 * NOTE the overlay uses StyleSheet.absoluteFillObject
 * https://reactnative.dev/docs/stylesheet#absolutefillobject
 * absoluteFill can be added to most elements to create an overlay
 * absoluteFillObject is used when you might want to extend it in a style sheet
 */
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
  },  
  
  video: {
    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,.15)",    
    padding: 15,
  },  

  overlayText: {
    color:'#eeeeee',
  }
});