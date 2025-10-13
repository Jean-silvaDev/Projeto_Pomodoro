import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

export function Ajuda({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>O que é o Método Pomodoro?</Text>
      
      <Text style={styles.paragraph}> /*Inserção de texto com a estilização styles.paragraph para explicação do método Pomodoro*/
        O Método Pomodoro é uma técnica de gerenciamento de tempo desenvolvida por Francesco Cirillo no final dos anos 1980. A técnica usa um cronômetro para dividir o trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por breves intervalos.
      </Text>
      
      <Text style={styles.subtitle}>Os 5 passos do método são:</Text>
      <Text style={styles.listItem}>1. Escolha uma tarefa para ser executada.</Text>
      <Text style={styles.listItem}>2. Ajuste o Pomodoro (cronômetro) para 25 minutos.</Text>
      <Text style={styles.listItem}>3. Trabalhe na tarefa até que o alarme toque.</Text>
      <Text style={styles.listItem}>4. Faça uma pausa curta (5 minutos).</Text>
      <Text style={styles.listItem}>5. Após quatro "Pomodoros", faça uma pausa mais longa (15-30 minutos).</Text>

      <TouchableOpacity style={styles.buttonLink} onPress={() => Linking.openURL('https://tecnicapomodoro.com.br')}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'justify',
  },
  listItem: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLink: { /*style para botão Saiba Mais*/
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  }
});