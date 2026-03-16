import { StyleSheet, View } from 'react-native';
import { Text, Button} from '@rneui/themed';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text h1 style={{alignSelf:'center'}}>Week 10 Example Files</Text>      

      <View style={styles.btnContainer}>
        <Button 
          title='SVG Example'
          onPress={() => navigation.navigate('Alpha')}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button 
          title='Lottie Example'
          onPress={() => navigation.navigate('Beta')}
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

  btnContainer: {
    padding: 10,
    width: '100%'
  },
});
