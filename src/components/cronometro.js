import { StyleSheet, Text, View } from 'react-native';

export function Cronometro({ color, time }) {
  return (
    <View style={color == 'red' ? styles.containerRed : styles.containerPurple}>
      <Text style={styles.cronometro}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerRed: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: 150,
    height: 150,
    margin: 20,
  },
  containerPurple: {
    backgroundColor: '#3E2D7C',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: 150,
    height: 150,
    margin: 20,
  },
  cronometro: {
    fontSize: 30,
    color: 'white',
  },
});