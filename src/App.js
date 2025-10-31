// Importa componentes básicos do React Native
import { View, Text } from "react-native";

// Importa a tela principal (Página de Foco)
import Foco from "./pages/foco";

// Importa o container que controla toda a navegação
import { NavigationContainer } from "@react-navigation/native";

// Importa o modelo de navegação em pilha (stack)
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importa o StyleSheet para criar estilos
import { StyleSheet } from "react-native";

// Importa as telas utilizadas no app
import { DescansoCurto } from "./pages/descansoCurto";
import { DescansoLongo } from "./pages/descansoLongo";
import { Ajuda } from "./pages/ajuda";

// Cria um objeto para a navegação do tipo Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // View principal que ocupa toda a tela
    <View style={styles.container}>
      
      {/* Componente responsável por gerenciar a navegação entre telas */}
      <NavigationContainer>
        
        {/* Configuração das telas usando Stack Navigator */}
        <Stack.Navigator
          initialRoute="home" // Rota inicial quando o app abre
          screenOptions={{ headerShown: false }} // Esconde o header padrão em todas as telas
        >
          {/* Tela inicial / Home */}
          <Stack.Screen name="home" component={Foco} />

          {/* Tela de Foco (igual à home, acessada por navegação interna) */}
          <Stack.Screen name="foco" component={Foco} />

          {/* Tela de descanso curto */}
          <Stack.Screen name="descansoCurto" component={DescansoCurto} />

          {/* Tela de descanso longo */}
          <Stack.Screen name="descansoLongo" component={DescansoLongo} />

          {/* Tela Ajuda - reativa o cabeçalho */}
          <Stack.Screen
            name="ajuda"
            component={Ajuda}
            options={{
              headerShown: true, // Mostra o cabeçalho somente nessa tela
              title: "Sobre o Método Pomodoro" // Título do cabeçalho
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

// Estilo da View principal
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a altura e largura disponível
  },
});