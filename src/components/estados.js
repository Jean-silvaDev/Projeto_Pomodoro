import { StyleSheet, Text, View } from 'react-native';
import { Estado } from './estado';

export function Estados({ color }) {
  return (
    <div style={color == 'red' ? styles.containerRed : (color == 'purple' ? styles.containerPurple : styles.containerGreen)}>
        <Estado color={color} />        
        <Estado color={color} />
        <Estado color={color} />
        <Estado color={color} />
        <Estado color={color} />
        <Estado color={color} />
    </div>
  );
}

const styles = StyleSheet.create({
  containerRed: {
    backgroundColor: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: "25vw",
    height: "55vh",
    gap: 10,
  },
  containerPurple: {
    backgroundColor: '#3E2D7C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: "25vw",
    height: "55vh",
    gap: 10,
  },
  containerGreen: {
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: "25vw",
    height: "55vh",
    gap: 10,
  }
});