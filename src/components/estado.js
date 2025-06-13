import { StyleSheet } from 'react-native';

export function Estado() {
  return (
    <div style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: "100%",
    width: "2.4vw",
    height: "5vh",
    flexDirection: 'row',
  },
});