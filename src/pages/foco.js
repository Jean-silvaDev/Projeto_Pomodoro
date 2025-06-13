import { StyleSheet, View } from 'react-native';
import { Cronometro } from '../components/cronometro';
import { Botao } from '../components/botao';
import { Estados } from '../components/estados';
import { Texto } from '../components/texto';
import { TextInput } from 'react-native-web';

export default function Foco() {
  return (
    <View style={styles.container}>
        <Cronometro /> 
        <Botao />
        <Estados /> 
        <Texto>Tempo de Foco</Texto>
        <TextInput style={styles.input} placeholder='asd'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '20%',
    borderRadius: 5,
    backgroundColor: 'white',
  }
});