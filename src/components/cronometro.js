// Hooks do React para estado, efeitos e referência de intervalos
import { useEffect, useRef, useState } from "react";

// Componentes do React Native para UI
import { StyleSheet, Text, View } from "react-native";

// Função utilitária que verifica a contagem do ciclo Pomodoro
import { verificaContagem } from "../utils/verificaContagem";

// Componente exportado que representa o cronômetro
export function Cronometro({ color, time, start, navigation }) {
  // Estado que guarda o tempo restante em segundos
  const [remaining, setRemaining] = useState(time * 60);

  // Referência para armazenar o intervalo, permitindo limpar depois
  const intervalRef = useRef(null);

  // useEffect para controlar o timer
  useEffect(() => {
    // Se o cronômetro não estiver ativo, não faz nada
    if (!start) {
      return;
    }

    // Inicia o intervalo de 1 segundo
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          // Quando o tempo acaba, limpa o intervalo
          clearInterval(intervalRef.current);

          // Chama a função que controla a navegação entre ciclos
          verificaContagem(navigation);

          return 0; // Garantir que o cronômetro não vá para negativo
        }
        return prev - 1; // Subtrai 1 segundo
      });
    }, 1000);

    // Limpeza do intervalo quando o componente desmonta ou `start` muda
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start, navigation]);

  // useEffect para resetar o tempo sempre que a prop `time` muda
  useEffect(() => {
    setRemaining(time * 60);
  }, [time]);

  // Função para formatar o tempo em MM:SS
  const formatTime = (totalSeconds) => {
    const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const sec = String(totalSeconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  // Estilo do container aplicado dinamicamente conforme a cor
  const containerStyle = [
    styles.containerBase,
    { backgroundColor: color === "purple" ? "#3E2D7C" : color },
  ];

  return (
    <View style={containerStyle}>
      {/* Exibe o tempo formatado */}
      <Text style={styles.cronometro}>{formatTime(remaining)}</Text>
    </View>
  );
}

// Estilos do cronômetro
const styles = StyleSheet.create({
  // Container base compartilhado para todos os cronômetros
  containerBase: {
    alignItems: "center",          // Centraliza conteúdo horizontalmente
    justifyContent: "center",      // Centraliza conteúdo verticalmente
    borderColor: "white",          // Borda branca
    borderWidth: 2,                // Largura da borda
    width: 150,                     // Largura do cronômetro
    height: 150,                    // Altura do cronômetro
    margin: 20,                     // Espaço ao redor
    borderRadius: 75,              // Forma circular (metade da largura/altura)
  },
  cronometro: {
    fontSize: 30,                  // Tamanho da fonte
    color: "white",                // Cor do texto
  },
});