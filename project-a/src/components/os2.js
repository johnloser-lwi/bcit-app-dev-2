import { View, Text, StyleSheet } from 'react-native';

export default function OnBoardScreen2() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>OnBoardScreen2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fdf6e8' },
  label: { fontSize: 24, fontWeight: 'bold' },
});
