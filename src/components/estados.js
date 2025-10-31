// Componentes do React Native
import { StyleSheet, View } from "react-native";

// Componente que representa cada círculo individual
import { Estado } from "./estado";

// Componente que organiza os 6 círculos do Pomodoro em linha
// color -> cor base do ciclo (foco / pausa curta / longa)
export function Estados({ color }) {
  // Escolhe o estilo correto do container baseado na cor
  const estilo =
    color === "red"
      ? styles.containerRed
      : color === "purple"
      ? styles.containerPurple
      : styles.containerGreen;

  return (
    <View style={estilo}>
      {/* Renderiza 6 círculos, cada um representando um ciclo */}
      <Estado color={color} id={1} />
      <Estado color={color} id={2} />
      <Estado color={color} id={3} />
      <Estado color={color} id={4} />
      <Estado color={color} id={5} />
      <Estado color={color} id={6} />
    </View>
  );
}

// Estilos do container que agrupa os círculos
const styles = StyleSheet.create({
  containerRed: {
    flexDirection: "row",          // ⬅️ Organiza as bolinhas em linha horizontal
    justifyContent: "center",      // Centraliza horizontalmente
    alignItems: "center",          // Centraliza verticalmente
    backgroundColor: "red",        // Cor do fundo do container
    borderColor: "white",          // Borda branca
    borderWidth: 2,                // Espessura da borda
    borderRadius: 100,             // Arredonda os cantos
    padding: 10,                   // Espaçamento interno
    gap: 8,                        // Espaçamento entre as bolinhas (somente RN >= 0.71 suporta)
  },
  containerPurple: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E2D7C",   // Fundo roxo para descanso curto
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    gap: 8,
  },
  containerGreen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",      // Fundo verde para descanso longo
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    gap: 8,
  },
});