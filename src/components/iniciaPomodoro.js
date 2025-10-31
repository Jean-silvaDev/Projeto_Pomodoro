// React e hooks
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

// AsyncStorage para persistência local
import AsyncStorage from "@react-native-async-storage/async-storage";

// Componente reutilizável de botão
import { Botao } from "./botao";

// Ícone de play
import { Play } from "lucide-react-native";

// Componente padrão exportado
// Recebe uma prop 'onNomeTarefaChange' para atualizar o estado da tarefa no componente pai
export default function IniciaPomodoro({ onNomeTarefaChange }) {
  // Estado local para armazenar o nome da tarefa digitada
  const [nomeTarefa, setNomeTarefa] = useState("");

  // Função chamada ao pressionar o botão de iniciar
  const iniciarPomodoro = async () => {
    // Verifica se o input não está vazio ou com espaços
    if (nomeTarefa && nomeTarefa.trim()) {
      // Salva o nome da tarefa no AsyncStorage
      await AsyncStorage.setItem("nomeTarefa", nomeTarefa);

      // Inicializa o contador de tempo (1 = primeiro Pomodoro)
      await AsyncStorage.setItem("tempo", "1");

      // Atualiza o estado do componente pai, se a função foi passada
      onNomeTarefaChange?.(nomeTarefa);
    }
  };

  return (
    <View style={styles.container}>
      {/* Input para o usuário digitar o nome da tarefa */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da tarefa..."
        value={nomeTarefa}          // Valor do input é o estado local
        onChangeText={setNomeTarefa} // Atualiza o estado ao digitar
      />

      {/* Botão para iniciar o Pomodoro */}
      <Botao color={"red"} onPress={iniciarPomodoro}>
        {/* Ícone de play dentro do botão */}
        <Play style={styles.icon} />
      </Botao>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: {
    justifyContent: "center", // Centraliza verticalmente
    alignItems: "center",     // Centraliza horizontalmente
    padding: 20,              // Espaçamento interno
  },
  input: {
    height: 50,               // Altura do campo de texto
    width: 250,               // Largura fixa
    borderColor: "gray",      // Cor da borda
    borderWidth: 1,           // Espessura da borda
    marginBottom: 20,         // Espaço abaixo do input
    paddingHorizontal: 15,    // Espaço interno horizontal
    borderRadius: 8,          // Cantos arredondados
    backgroundColor: "white", // Fundo branco
  },
  icon: {
    width: 40,                // Largura do ícone
    height: 40,               // Altura do ícone
    backgroundColor: "red",   // Fundo do ícone
    color: "white",           // Cor do ícone
    borderRadius: 20,         // Bordas arredondadas (metade da largura/altura)
  },
});