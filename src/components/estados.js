import { StyleSheet, Text, View } from 'react-native';
import { Estado } from './estado';

export function Estados() {
  return (
    <div style={styles.container}>
        <Estado />
        <Estado />
        <Estado />
        <Estado />
        <Estado />
        <Estado />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
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
});