import { CircleHelp } from 'lucide-react';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IniciaPomodoro() {
  const [nomeTarefa, setNomeTarefa] = useState('');

  const iniciarPomodoro = async () => {
    console.log('Tarefa iniciada:', nomeTarefa);
    if (nomeTarefa && nomeTarefa.trim()) {
      await AsyncStorage.setItem('nomeTarefa', nomeTarefa);
      await AsyncStorage.setItem('tempo', 1);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} 
        placeholder='Digite o nome da tarefa...'
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />
      <Button title="Iniciar Pomodoro" onPress={iniciarPomodoro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
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
});