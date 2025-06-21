import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Cronometro({ color, time }) {
  const [ timer, setTimer ] = useState('00:00');
  const [ date, setDate ] = useState();
  
  function getTime() {
    const now = new Date();
    if (date == null) {
      now.setMinutes(now.getMinutes() + time);
      setDate(now);
    }
    return now;
  }

  function getTimeFormat(date) {
    if (date == null) {
      return '00:00';
    }
    const dateF = new Date(date);
    const minutes = String(dateF.getMinutes()).padStart(2, '0');
    const seconds = String(dateF.getSeconds()).padStart(2, '0');
    return `${minutes}:${seconds}`;
  }


  function getTimeDivided() {
    const timerNow = date - getTime();
    if (timerNow < 0) {
      return null;
    }
    return date - getTime();
  }
  
  useEffect(() => {
    setTimeout(() => {setTimer((timer) => timer + 1)}, 1000);
    setTimer(getTime());
  }); 
  
  return (
    <View style={color == 'red' ? styles.containerRed : styles.containerPurple}>
      <Text style={styles.cronometro}>{getTimeFormat(getTimeDivided())}</Text>
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