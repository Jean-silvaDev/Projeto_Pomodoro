import { TouchableOpacity } from "react-native";

export function Botao({ children, onPress, color }) {
  return (
    <TouchableOpacity onPress={onPress} style={color == 'red' ? styles.botaoRed : styles.botaoPurple}>
        {children}
    </TouchableOpacity>
  );
}

const styles = {
  botaoRed: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    fill: 'red',
    color: 'red',
    borderColor: 'red',
    margin: 20,
  },
  botaoPurple: {
    width: 40,
    height: 40,
    backgroundColor: '#3E2D7C',
    fill: '#3E2D7C',
    color: '#3E2D7C',
    borderColor: '#3E2D7C',
    margin: 20,
  }
};