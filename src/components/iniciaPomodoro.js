// import { useState } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Botao } from './botao';
// import { Play } from 'lucide-react';

// export default function IniciaPomodoro({ onNomeTarefaChange }) {
//   const [nomeTarefa, setNomeTarefa] = useState('');

//   const iniciarPomodoro = async () => {
//     if (nomeTarefa && nomeTarefa.trim()) {
//       await AsyncStorage.setItem('nomeTarefa', nomeTarefa);
//       await AsyncStorage.setItem('tempo', 1);
//       onNomeTarefaChange?.(nomeTarefa);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput style={styles.input}
//         placeholder='Digite o nome da tarefa...'
//         value={nomeTarefa}
//         onChangeText={setNomeTarefa}
//       />
//       <Botao color={'red'} onPress={iniciarPomodoro}>
//         <Play style={styles.icon} />
//       </Botao>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 50
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
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadius: 60,
//     marginLeft: -5,
//   },
// });

// FILE: components/IniciaPomodoro.js
import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Botao } from "./botao";
import { Play } from "lucide-react-native";

// Default export
export default function IniciaPomodoro({ onNomeTarefaChange }) {
  const [nomeTarefa, setNomeTarefa] = useState("");

  const iniciarPomodoro = async () => {
    if (nomeTarefa && nomeTarefa.trim()) {
      await AsyncStorage.setItem("nomeTarefa", nomeTarefa);
      // FIX: AsyncStorage armazena strings. Convertendo para '1'.
      await AsyncStorage.setItem("tempo", "1");
      onNomeTarefaChange?.(nomeTarefa);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da tarefa..."
        value={nomeTarefa}
        onChangeText={setNomeTarefa}
      />
      <Botao color={"red"} onPress={iniciarPomodoro}>
        <Play style={styles.icon} />
      </Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // FIX: Removido 'flex: 1' para evitar problemas de layout.
    justifyContent: "center",
    alignItems: "center",
    padding: 20, // Ajustado o padding
  },
  input: {
    height: 50, // Altura mais razoável para o input
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20, // Ajustado margin
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: "white",
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: "red",
    color: "white",
    // FIX: borderRadius corrigido para ser metade da altura/largura
    borderRadius: 20,
  },
});
