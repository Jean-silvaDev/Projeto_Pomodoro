// Importa o StyleSheet e View do React Native para estilização e layout
import { StyleSheet, View } from "react-native";

// Importa os componentes reutilizáveis do projeto
import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";
import { Estados } from "../components/estados";
import { Texto } from "../components/texto";

// Ícones usados para play, pause, ajuda e pular
import {
  CircleHelp,
  CirclePlay,
  PauseCircle,
  SkipForward,
} from "lucide-react-native";

// Hooks do React
import { useState, useCallback } from "react";

// Componente para iniciar o pomodoro e definir a tarefa
import IniciaPomodoro from "../components/iniciaPomodoro";

// Biblioteca para armazenamento local no dispositivo
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função que controla a mudança entre ciclos do Pomodoro
import { verificaContagem } from "../utils/verificaContagem";

// Hook do React Navigation que executa quando a tela ganha foco
import { useFocusEffect } from "@react-navigation/native";

export default function Foco({ navigation }) {
  // Estado que controla se o cronômetro está rodando ou pausado
  const [start, setStart] = useState(false);

  // Estado que guarda o nome da tarefa atual
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState("");

  // Sempre que a tela voltar a estar ativa, carrega a tarefa salva
  useFocusEffect(
    useCallback(() => {
      const carregarTarefa = async () => {
        // Busca o nome salvo no AsyncStorage
        let nomeTarefa = await AsyncStorage.getItem("nomeTarefa");

        // Se estiver vazio ou só espaços, define como string vazia
        if (!nomeTarefa || !nomeTarefa.trim()) {
          nomeTarefa = "";
        }

        // Atualiza o estado com o nome da tarefa atual
        setNomeTarefaAtual(nomeTarefa);
      };

      carregarTarefa();
    }, [])
  );

  return (
    <View style={styles.container}>
      {/* Componente do cronômetro com 25 minutos */}
      <Cronometro
        color={"red"}
        time={25}
        start={start}
        navigation={navigation}
      />

      {/* Área com botões de iniciar/pausar e de pular ciclo */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Botao
          color={"red"}
          onPress={() => setStart(!start)} // alterna entre start e pause
          disabled={nomeTarefaAtual === ""} // desabilita se não houver tarefa
        >
          {/* Renderiza o ícone certo dependendo do estado */}
          {start ? (
            <PauseCircle style={styles.icon} />
          ) : (
            <CirclePlay style={styles.icon} />
          )}
        </Botao>

        {/* Botão para avançar manualmente o ciclo do Pomodoro */}
        <Botao
          color={"red"}
          onPress={() => verificaContagem(navigation)}
          disabled={nomeTarefaAtual === ""} // só habilita se tiver tarefa
        >
          <SkipForward style={styles.iconNext} />
        </Botao>
      </View>

      {/* Componente que exibe a barra de progresso dos ciclos */}
      <Estados color={"red"} />

      {/* Textos exibidos dependendo se há tarefa ou não */}
      {nomeTarefaAtual !== "" && <Texto>Tempo de Foco</Texto>}
      {nomeTarefaAtual !== "" && <Texto>Tarefa: {nomeTarefaAtual}</Texto>}

      {/* Caso não tenha tarefa ainda */}
      {nomeTarefaAtual === "" && <Texto>Inicie uma tarefa</Texto>}
      {nomeTarefaAtual === "" && (
        <IniciaPomodoro onNomeTarefaChange={setNomeTarefaAtual} />
      )}

      {/* Botão para acessar tela de ajuda */}
      <Botao color={"red"} onPress={() => navigation.navigate("ajuda")}>
        <CircleHelp style={styles.iconQuestion} />
      </Botao>
    </View>
  );
}

// Estilização da tela e dos ícones
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    color: "red",
    borderRadius: 20,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    color: "white",
    borderRadius: 20,
  },
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    color: "red",
    borderRadius: 12.5,
  },
});