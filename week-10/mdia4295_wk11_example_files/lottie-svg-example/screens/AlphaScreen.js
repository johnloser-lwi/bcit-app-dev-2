import { StyleSheet, View } from 'react-native';
import { Text, } from '@rneui/themed';

import Logo from '../components/Logo';

export default function AlphaScreen() {
  return (
    <View style={styles.container}>
      <Text h1 style={{ alignSelf: 'center' }}>SVG Example</Text>

      {/* default version */}
      <View style={styles.logoBox}>
        <Logo />
      </View>

      {/* set colours */}
      <View style={styles.logoBox}>
        <Logo color='#003e6b' backgroundColor='#fff400' width={200} height={125} />
      </View>

      {/* using mixed dimensions */}
      <View style={styles.logoBox}>
        <Logo width={"100%"} height={75} />
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

  logoBox:{
    width:'100%',
    alignContent:'center',
    marginBottom:15,
  }
});
