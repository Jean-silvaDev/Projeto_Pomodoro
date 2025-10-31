// Importa TouchableOpacity, que é o componente de botão "tocável" do React Native
import { TouchableOpacity } from "react-native";

// Componente Botao recebe:
// children -> o conteúdo dentro do botão (ícone/texto)
// onPress -> função chamada ao clicar
// color -> define o estilo conforme a tela (foco, descanso curto/longo)
// disabled -> controla se o botão está ativo ou desativado
export function Botao({ children, onPress, color, disabled }) {
  return (
    <TouchableOpacity 
      onPress={onPress}              // Executa ação ao clicar
      disabled={disabled}            // Desativa toque se disabled = true
      // Escolhe estilo baseado na cor recebida pela prop
      style={
        color == 'red' 
          ? styles.botaoRed 
          : (color == 'purple' 
              ? styles.botaoPurple 
              : styles.botaoGreen)
      }
    >
      {/* Renderiza qualquer conteúdo passado (ícones, texto etc.) */}
      {children}
    </TouchableOpacity>
  );
}

// Estilos dos botões conforme o estado Pomodoro (foco / pausa curta / pausa longa)
const styles = {
  botaoRed: {        // Usado na tela de Foco
    width: 40,
    height: 40,
    backgroundColor: 'red',
    fill: 'red',
    color: 'red',
    borderColor: 'red',
    margin: 20,
  },
  botaoPurple: {     // Usado na tela de Descanso Curto
    width: 40,
    height: 40,
    backgroundColor: '#3E2D7C',
    fill: '#3E2D7C',
    color: '#3E2D7C',
    borderColor: '#3E2D7C',
    margin: 20,
  },
  botaoGreen: {      // Usado na tela de Descanso Longo
    width: 40,
    height: 40,
    backgroundColor: 'green',
    fill: 'green',
    color: 'green',
    borderColor: 'green',
    margin: 20,
  }
};