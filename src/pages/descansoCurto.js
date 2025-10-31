// Importa o componente Cronômetro que controla o tempo
import { Cronometro } from "../components/cronometro";

// Importa o componente de botão reutilizável
import { Botao } from "../components/botao";

// Importa ícones utilizados nos botões
import {
  CircleHelp,
  CirclePlay,
  PauseCircle,
  SkipForward,
} from "lucide-react-native";

// Importa o componente que exibe os estados do ciclo Pomodoro
import { Estados } from "../components/estados";

// Componente de texto estilizado
import { Texto } from "../components/texto";

// Importa View e StyleSheet para estrutura da tela e estilos
import { StyleSheet, View } from "react-native";

// Importa hooks do React
import { useCallback, useState } from "react";

// Para salvar e recuperar dados localmente no dispositivo
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função que controla a lógica de mudança de ciclos
import { verificaContagem } from "../utils/verificaContagem";

// Hook executado quando a tela ganha foco novamente
import { useFocusEffect } from "@react-navigation/native";

export function DescansoCurto({ navigation }) {
  // Estado para controlar se o cronômetro está rodando
  const [start, setStart] = useState(false);

  // Armazena o nome da tarefa atual para exibição
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState("");

  // Executa toda vez que a tela volta a ser exibida
  useFocusEffect(
    useCallback(() => {
      const carregarTarefa = async () => {
        // Busca o nome da tarefa salva no AsyncStorage
        let nomeTarefa = await AsyncStorage.getItem("nomeTarefa");

        // Se não existir ou for vazio, define como string vazia
        if (!nomeTarefa || !nomeTarefa.trim()) {
          nomeTarefa = "";
        }

        // Atualiza o estado com o nome da tarefa
        setNomeTarefaAtual(nomeTarefa);
      };

      carregarTarefa();
    }, [])
  );

  // Função que inicia ou pausa o cronômetro
  const handleStart = () => {
    setStart(!start);
  };

  return (
    <View style={styles.container}>

      {/* Cronômetro configurado para 5 minutos com cor roxa */}
      <Cronometro
        color={"purple"}
        time={5}
        start={start}
        navigation={navigation}
      />

      {/* Área dos botões de controle */}
      <View style={{ flexDirection: "row", justifyContent: "center" }}>

        {/* Botão Play / Pause */}
        <Botao color={"purple"} onPress={handleStart}>
          {start ? (
            <PauseCircle style={styles.icon} /> // Ícone quando está rodando
          ) : (
            <CirclePlay style={styles.icon} />  // Ícone quando está parado
          )}
        </Botao>

        {/* Botão para pular direto para próxima etapa */}
        <Botao color={"purple"} onPress={() => verificaContagem(navigation)}>
          <SkipForward style={styles.iconNext} />
        </Botao>
      </View>

      {/* Indicador dos estados do Pomodoro */}
      <Estados color={"purple"} />

      {/* Textos informativos da tela */}
      <Texto>Tempo de Descanso Curto</Texto>
      <Texto>Tarefa: {nomeTarefaAtual}</Texto>
    </View>
  );
}

// Estilização da tela e dos ícones
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3E2D7C", // Cor roxa de fundo
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    color: "#3E2D7C",
    borderRadius: 20, // ícone arredondado
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: "#3E2D7C",
    color: "white",
    borderRadius: 20, // ícone arredondado
  },
});
