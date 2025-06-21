import { StyleSheet, View, TextInput } from 'react-native';
import { Cronometro } from '../components/cronometro';
import { Botao } from '../components/botao';
import { Estados } from '../components/estados';
import { Texto } from '../components/texto';
import { CircleHelp, CirclePlay, SkipForward  } from 'lucide-react';

export default function Foco({ navigation }) {
  return (
    <View style={styles.container}>
      <Cronometro color={'red'} time={25} /> 
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Botao color={'red'}>
          <CirclePlay style={styles.icon} />
        </Botao>
        <Botao color={'red'} onPress={() => navigation.navigate('descansoCurto')}>
          <SkipForward style={styles.iconNext}/>
        </Botao>
      </View>
      <Estados color={'red'} /> 
      <Texto>Tempo de Foco</Texto>
      <TextInput style={styles.input} placeholder='Digite o nome da tarefa...'/>
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