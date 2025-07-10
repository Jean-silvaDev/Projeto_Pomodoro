import { StyleSheet, View, TextInput } from 'react-native';
import { Cronometro } from '../components/cronometro';
import { Botao } from '../components/botao';
import { Estados } from '../components/estados';
import { Texto } from '../components/texto';
import { CircleHelp, CirclePlay, PauseCircle, SkipForward  } from 'lucide-react';
import { useEffect, useState } from 'react';
import IniciaPomodoro from '../components/iniciaPomodoro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verificaContagem } from '../utils/verificaContagem';

export default function Foco({ navigation }) {
  const [start, setStart] = useState(false);
  const [nomeTarefaAtual, setNomeTarefaAtual] = useState('');

  useEffect(() => {
    const carregarTarefa = async () => {
      let nomeTarefa = await AsyncStorage.getItem('nomeTarefa');
      if (!nomeTarefa || !nomeTarefa.trim()) {
        nomeTarefa = 'Tarefa 1';
      }
      setNomeTarefaAtual(nomeTarefa);
      console.log('Tarefa carregada:', nomeTarefa);
    };

    carregarTarefa();
  }, []);


  const iniciarPomodoro = async () => {
    let nomeTarefa = await AsyncStorage.getItem('nomeTarefa');
    
    if (!nomeTarefa || !nomeTarefa.trim()) {
      nomeTarefa = 'Tarefa 1';
    }

    console.log('Tarefa iniciada:', nomeTarefa);

    setNomeTarefaAtual(nomeTarefa);
    
    if (!start) {
      setStart(true);
    }
};

  return (
    <View style={styles.container}>
      <Cronometro color={'red'} time={1} start={start} navigation={navigation} /> 
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Botao color={'red'} onPress={iniciarPomodoro}>
          {start ? <PauseCircle style={styles.icon} /> : <CirclePlay style={styles.icon} />}
        </Botao>
        <Botao color={'red'} onPress={() => verificaContagem(navigation)}>
          <SkipForward style={styles.iconNext}/>
        </Botao>
      </View>
      <Estados color={'red'} /> 
      <Texto>{nomeTarefaAtual}</Texto>
      {nomeTarefaAtual === 'Tarefa 1' && <IniciaPomodoro />}
      <Botao color={'red'}>
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
    backgroundColor: 'red',
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
    color: 'red',
    borderRadius: 60,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 60,
  },
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    color: 'red',
    borderRadius: "100%",
  }
});