import { StyleSheet, Text, View } from 'react-native';

export function Cronometro() {
  return (
    <View style={styles.container}>
      <Text style={styles.cronometro}>25:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: "25vw",
    height: "55vh",
  },
  cronometro: {
    fontSize: 30,
    color: 'white',
  },
});