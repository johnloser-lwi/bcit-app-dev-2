import { View, Text, StyleSheet } from 'react-native';

export default function OnBoardScreen3() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>OnBoardScreen3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#edfdf0' },
  label: { fontSize: 24, fontWeight: 'bold' },
});
