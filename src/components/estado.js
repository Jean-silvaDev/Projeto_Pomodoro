import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet } from 'react-native';

export function Estado({ color, id }) {
  const [value, setValue] = useState('empty');

  useEffect(() => {
    const verificaEstado = async () => {
      const contagem = Number.parseInt(await AsyncStorage.getItem('tempo')) || 1;
      console.log('Estado atual:', contagem, 'ID:', id);
      setValue(id >= contagem ? 'empty' : 'full');
    };

    verificaEstado();
  }, [id]);

  const getStyle = () => {
    if (color === 'red') return value === 'full' ? styles.containerRedFull : styles.containerRed;
    if (color === 'purple') return value === 'full' ? styles.containerPurpleFull : styles.containerPurple;
    if (color === 'green') return value === 'full' ? styles.containerGreenFull : styles.containerGreen;
    return styles.containerRed;
  };

  return <View style={getStyle()} />;
}

const baseStyle = {
  alignItems: 'center',
  justifyContent: 'center',
  borderColor: 'white',
  borderStyle: 'solid',
  borderWidth: 2,
  borderRadius: 100,
  width: 15,
  height: 15,
  flexDirection: 'row',
};

const styles = StyleSheet.create({
  containerRed: {
    ...baseStyle,
    backgroundColor: 'red',
  },
  containerRedFull: {
    ...baseStyle,
    backgroundColor: 'white',
  },
  containerPurple: {
    ...baseStyle,
    backgroundColor: '#3E2D7C',
  },
  containerPurpleFull: {
    ...baseStyle,
    backgroundColor: 'white',
  },
  containerGreen: {
    ...baseStyle,
    backgroundColor: 'green',
  },
  containerGreenFull: {
    ...baseStyle,
    backgroundColor: 'white',
  },
});