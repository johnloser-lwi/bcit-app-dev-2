import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { StyleSheet, View, } from 'react-native';

import { Text, Button } from '@rneui/themed';

const videoSource = require('../assets/hockeyvideo.mp4');

export default function BetaScree() {

  // instantiate the video using the asset above
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  // videos don't inherently respond to React state so we need to use the useEvent hook
  // this will return a state variable, in this case isPlaying, that we can use in the button below
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.container}>
      <Text h1>Video Player Example</Text>

      <View style={styles.videoContainer}>
        {/* container to hold the video */}
        <VideoView 
          style={styles.video} 
          player={player} 
          allowsFullscreen 
          allowsPictureInPicture 
          nativeControls={false}  // set to true if you want the controls for fullscreen
        />

        <View style={styles.controlsContainer}>
          <Button
            title={isPlaying ? 'PAUSE' : 'PLAY'}
            onPress={() => {
              if (isPlaying) {
                player.pause();
              } else {
                player.play();
              }
            }}
          />
        </View>
      </View>

    </View>



  );
}

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  videoContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',    
  },

  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
