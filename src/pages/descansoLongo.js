// Importa o cronômetro, botão e outros componentes reutilizáveis
import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";

// Ícones do pacote lucide-react-native para play, pause, skip, etc.
import {
  CircleHelp,
  CirclePlay,
  PauseCircle,
  SkipForward,
} from "lucide-react-native";

import { Estados } from "../components/estados";
import { Texto } from "../components/texto";
import { StyleSheet, View } from "react-native";

// Hooks do React para estado e callbacks
import { useCallback, useState } from "react";

// Função que controla para onde o usuário vai no ciclo Pomodoro
import { verificaContagem } from "../utils/verificaContagem";

// Armazenamento local assíncrono para salvar dados no dispositivo
import AsyncStorage from "@react-native-async-storage/async-storage";

// Hook do React Navigation que roda toda vez que a tela ganha foco
import { useFocusEffect } from "@react-navigation/native";

export function DescansoLongo({ navigation }) {
  // Estado que controla se o cronômetro está rodando ou pausado
  const [start, setStart] = useState(false);

  // Estado que guarda o nome da tarefa atual (recebida do armazenamento)
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState("");

  // Roda toda vez que o usuário entra na tela
  useFocusEffect(
    useCallback(() => {
      const carregarTarefa = async () => {
        // Busca o nome da tarefa salva no AsyncStorage
        let nomeTarefa = await AsyncStorage.getItem("nomeTarefa");

        // Se não tiver tarefa salva, volta para a tela de foco
        if (!nomeTarefa || !nomeTarefa.trim()) {
          navigation.natigate("foco"); // OBS: erro de digitação aqui (navigate)
        }

        // Define o nome da tarefa no estado
        setNomeTarefaAtual(nomeTarefa);
      };

      carregarTarefa();
    }, [])
  );

  // Alterna entre iniciar e pausar o cronômetro
  const handleStart = () => {
    setStart(!start);
  };

  return (
    <View style={styles.container}>
      {/* Componente do cronômetro, recebe duração de 15 minutos */}
      <Cronometro
        color={"green"}
        time={15}
        start={start}
        navigation={navigation}
      />

      {/* Botões de controle (play/pause e pular tempo) */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Botao color={"green"} onPress={handleStart}>
          {start ? (
            <PauseCircle style={styles.icon} />
          ) : (
            <CirclePlay style={styles.icon} />
          )}
        </Botao>

        {/* Pular para próxima fase do ciclo */}
        <Botao color={"green"} onPress={() => verificaContagem(navigation)}>
          <SkipForward style={styles.iconNext} />
        </Botao>
      </View>

      {/* Mostra o status dos ciclos Pomodoro */}
      <Estados color={"green"} />

      {/* Texto informativo da tela */}
      <Texto>Tempo de Descanso Longo</Texto>
      <Texto>Tarefa: {nomeTarefaAtual}</Texto>
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    color: "#green",
    borderRadius: 20,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: "green",
    color: "white",
    borderRadius: 20,
  },
});