import { StyleSheet, View, ImageBackground, } from 'react-native';

import { Button, Text } from '@rneui/themed';

export default function HomeScreen({ navigation }) {

  return (

    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/lab-assets/beach-splash-bg.png')}>

        <View style={{ flex: 1 }}>
          <View style={{ flex: 2 }}>
            <Text h1 style={styles.headingText}>Welcome to {'\n'}Resorts R'Us</Text>
          </View>

          <View style={{ flex: 1, paddingHorizontal: 10 }}>
            <Button
              title="Browse Resorts"
              icon={{
                name: 'arrow-forward-outline',
                type: 'ionicon',
                size: 25,
              }}
              iconPosition='right'
              raised={true}
              onPress={() => navigation.navigate('ResortList')}
            />
          </View>

        </View>

      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headingText: {
    marginTop: 200,
    marginBottom: 10,
    alignSelf: 'center',
  },

  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
});