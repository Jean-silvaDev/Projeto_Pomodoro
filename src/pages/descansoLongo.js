import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";
import {
  CircleHelp,
  CirclePlay,
  PauseCircle,
  SkipForward,
} from "lucide-react-native";
import { Estados } from "../components/estados";
import { Texto } from "../components/texto";
import { StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import { verificaContagem } from "../utils/verificaContagem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export function DescansoLongo({ navigation }) {
  const [start, setStart] = useState(false);
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState("");

  useFocusEffect(
    useCallback(() => {
      const carregarTarefa = async () => {
        let nomeTarefa = await AsyncStorage.getItem("nomeTarefa");
        if (!nomeTarefa || !nomeTarefa.trim()) {
          navigation.natigate("foco");
        }
        setNomeTarefaAtual(nomeTarefa);
      };

      carregarTarefa();
    }, [])
  );

  const handleStart = () => {
    setStart(!start);
  };

  return (
    <View style={styles.container}>
      <Cronometro
        color={"green"}
        time={15}
        start={start}
        navigation={navigation}
      />
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Botao color={"green"} onPress={handleStart}>
          {start ? (
            <PauseCircle style={styles.icon} />
          ) : (
            <CirclePlay style={styles.icon} />
          )}
        </Botao>
        <Botao color={"green"} onPress={() => verificaContagem(navigation)}>
          <SkipForward style={styles.iconNext} />
        </Botao>
      </View>
      <Estados color={"green"} />
      <Texto>Tempo de Descanso Longo</Texto>
      <Texto>Tarefa: {nomeTarefaAtual}</Texto>
      <Botao color={"green"}>
        <CircleHelp style={styles.iconQuestion} />
      </Botao>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'green',
//   },
//   input: {
//     height: 250,
//     width: 250,
//     borderColor: 'gray',
//     borderWidth: 2,
//     margin: 20,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     backgroundColor: 'white',
//   },
//   icon: {
//     width: 40,
//     height: 40,
//     backgroundColor: 'white',
//     color: '#green',
//     borderRadius: 60,
//   },
//   iconNext: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#green',
//     color: 'white',
//     borderRadius: 60,
//   },
//   iconQuestion: {
//     width: 25,
//     height: 25,
//     backgroundColor: 'white',
//     color: 'green',
//     borderRadius: "100%",
//   }
// });

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
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: "white",
    color: "green",
    borderRadius: 12.5,
  },
});
