// Importa o React
import React from 'react';

// Importa componentes essenciais do React Native
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';

// Componente da tela "Ajuda"
export function Ajuda({ navigation }) { // Recebe a prop navigation para voltar à tela anterior
  return (
    // ScrollView permite rolagem caso o conteúdo seja grande
    <ScrollView style={styles.container}>
      
      {/* Título da página */}
      <Text style={styles.title}>O que é o Método Pomodoro?</Text>
      
      {/* Parágrafo explicativo com estilo configurado */}
      <Text style={styles.paragraph}>
        O Método Pomodoro é uma técnica de gerenciamento de tempo desenvolvida por Francesco Cirillo no final dos anos 1980. 
        A técnica usa um cronômetro para dividir o trabalho em intervalos, tradicionalmente de 25 minutos de duração, separados por breves intervalos.
      </Text>
      
      {/* Subtítulo */}
      <Text style={styles.subtitle}>Os 5 passos do método são:</Text>

      {/* Lista dos passos do Método Pomodoro */}
      <Text style={styles.listItem}>1. Escolha uma tarefa para ser executada.</Text>
      <Text style={styles.listItem}>2. Ajuste o Pomodoro (cronômetro) para 25 minutos.</Text>
      <Text style={styles.listItem}>3. Trabalhe na tarefa até que o alarme toque.</Text>
      <Text style={styles.listItem}>4. Faça uma pausa curta (5 minutos).</Text>
      <Text style={styles.listItem}>5. Após quatro "Pomodoros", faça uma pausa mais longa (15-30 minutos).</Text>

      {/* Botão com link externo usando Linking */}
      <TouchableOpacity 
        style={styles.buttonLink}
        onPress={() => Linking.openURL('https://tecnicapomodoro.com.br')}
      >
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>

      {/* Botão para voltar para a tela anterior */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.goBack()} // Função de navegação de retorno
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Estilos usados na tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a tela
    padding: 20,
    backgroundColor: '#f5f5f5', // Cor de fundo clara
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 18,
    lineHeight: 26, // Espaçamento entre linhas para melhor leitura
    textAlign: 'justify', // Alinha o texto justificado
  },
  listItem: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 5,
  },
  button: { // Estilo botão Voltar
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center', // Centraliza conteúdo dentro do botão
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLink: { // Estilo botão "Saiba mais"
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 8,
    marginTop: 30,
    alignItems: 'center',
  }
});
