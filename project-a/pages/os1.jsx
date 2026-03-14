import { View, Text, StyleSheet } from 'react-native';

export default function OnboardScreen_1() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>OnboardScreen_1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#e8f4fd' },
  label: { fontSize: 24, fontWeight: 'bold' },
});
