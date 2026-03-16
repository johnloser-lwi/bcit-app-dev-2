import { StyleSheet, View } from 'react-native';
import { Text, Button} from '@rneui/themed';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text h1 style={{alignSelf:'center'}}>Home Screen</Text>      

      <View style={styles.btnContainer}>
        <Button 
          title='Background Video'
          onPress={() => navigation.navigate('Alpha')}
        />
      </View>

      <View style={styles.btnContainer}>
        <Button 
          title='Video with Play/Pause'
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
