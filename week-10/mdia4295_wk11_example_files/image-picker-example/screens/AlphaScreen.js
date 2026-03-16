import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Image } from '@rneui/themed';

import * as ImagePicker from 'expo-image-picker';

export default function AlphaScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // you can see the image data here
    console.log(result);

    if (!result.canceled) {
      // can be used to pick multiple images in this case the first one is loaded
      setImage(result.assets[0].uri);
    }
  };

  const useCamera = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // you can see the image data here
    // notice that since it's from the camera the location is the device cache
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Text h2>Image Picker Example</Text>

        <View style={styles.btnContainer}>
          <Button title="Select from camera roll" onPress={pickImage} />
        </View>
        
        <View style={styles.btnContainer}>
          <Button title="Use camera to take picture" onPress={useCamera} />
        </View>
        
      </View>

      <View style={{flex:2}}>
        <Text h2>Selected Image</Text>
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',    
  },

  btnContainer: {
    padding:10,
  },

  // note: matches the 4:3 ratio for the cropping tool
  image: {
    width: 300,
    height: 225,
  },
});