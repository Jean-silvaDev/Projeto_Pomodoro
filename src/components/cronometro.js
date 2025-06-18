import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Cronometro({ color, time }) {
  const [ timer, setTimer ] = useState('00:00');

  
  function getTime() {
    const now = new Date();
    const valueNow = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
    return String(valueNow.getMinutes()).padStart(2, '0') + ':' + String(valueNow.getSeconds()).padStart(2, '0');
  }
  
  useEffect(() => {
    setTimeout(() => {setTimer((timer) => timer + 1)}, 1000);
    setTimer(getTime());
  });
  
  return (
    <View style={color == 'red' ? styles.containerRed : styles.containerPurple}>
      <Text style={styles.cronometro}>{timer}</Text>
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