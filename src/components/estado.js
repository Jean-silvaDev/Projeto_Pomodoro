import { StyleSheet } from 'react-native';

export function Estado({ color }) {
  return (
    <div style={color == 'red' ? styles.containerRed : styles.containerPurple} />
  );
}

const styles = StyleSheet.create({
  containerRed: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: "100%",
    width: 15,
    height: 15,
    flexDirection: 'row',
  },
  containerPurple: {
    backgroundColor: '#3E2D7C',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: "100%",
    width: 15,
    height: 15,
    flexDirection: 'row',
  },
});