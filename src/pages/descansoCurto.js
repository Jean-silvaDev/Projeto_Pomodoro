import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";
import { CircleHelp, CirclePlay, PauseCircle, SkipForward } from "lucide-react";
import { Estados } from "../components/estados";
import { Texto } from "../components/texto";
import { StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verificaContagem } from "../utils/verificaContagem";
import { useFocusEffect } from "@react-navigation/native";

export function DescansoCurto({ navigation }) {
  const [start, setStart] = useState(false);
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState('');

  useFocusEffect(
    useCallback(() => {
      const carregarTarefa = async () => {
        let nomeTarefa = await AsyncStorage.getItem('nomeTarefa');
        if (!nomeTarefa || !nomeTarefa.trim()) {
          nomeTarefa = '';
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
        <Cronometro color={'purple'} time={1} start={start} navigation={navigation} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Botao color={'purple'} onPress={handleStart}>
              {start ? <PauseCircle style={styles.icon} /> : <CirclePlay style={styles.icon} />}
            </Botao>
            <Botao color={'purple'} onPress={() => verificaContagem(navigation)}>
                <SkipForward style={styles.iconNext}/>
            </Botao>
        </View>
        <Estados color={'purple'} />
        <Texto>Tempo de Descanso Curto</Texto>
        <Texto>Tarefa: {nomeTarefaAtual}</Texto>
        <Botao color={'purple'} >
            <CircleHelp style={styles.iconQuestion} />
        </Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3E2D7C',
  },
  input: {
    height: 250,
    width: 250,
    borderColor: 'gray',
    borderWidth: 2,
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    color: '#3E2D7C',
    borderRadius: 60,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: '#3E2D7C',
    color: 'white',
    borderRadius: 60,
  },
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    color: '#3E2D7C',
    borderRadius: "100%",
  }
});