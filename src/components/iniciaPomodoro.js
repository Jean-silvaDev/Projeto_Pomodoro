import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Botao } from './botao';
import { Play } from 'lucide-react';

export default function IniciaPomodoro({ onNomeTarefaChange }) {
  const [nomeTarefa, setNomeTarefa] = useState('');

  const iniciarPomodoro = async () => {
    if (nomeTarefa && nomeTarefa.trim()) {
      await AsyncStorage.setItem('nomeTarefa', nomeTarefa);
      await AsyncStorage.setItem('tempo', 1);
      onNomeTarefaChange?.(nomeTarefa);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
        placeholder='Digite o nome da tarefa...'
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />
      <Botao color={'red'} onPress={iniciarPomodoro}>
        <Play style={styles.icon} />
      </Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 50 
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
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 60,
    marginLeft: -5,
  },
});