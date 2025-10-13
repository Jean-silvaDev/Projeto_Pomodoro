// import { View } from 'react-native-web';
// import Foco from './pages/foco';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StyleSheet } from 'react-native';
// import { DescansoCurto } from './pages/descansoCurto';
// import { DescansoLongo } from './pages/descansoLongo';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <NavigationContainer>
//         <Stack.Navigator initialRoute="home" screenOptions={{ headerShown: false}} >
//           <Stack.Screen name="home" component={Foco} />
//           <Stack.Screen name="foco" component={Foco}  />
//           <Stack.Screen name="descansoCurto" component={DescansoCurto} />
//           <Stack.Screen name="descansoLongo" component={DescansoLongo} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator(); // Criando a pilha de navegação

// const styles = StyleSheet.create({
//   container: {
//     width: '100vw',
//     height: '100vh',
//   }
// });

import { View, Text } from "react-native";
import Foco from "./pages/foco";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { DescansoCurto } from "./pages/descansoCurto";
import { DescansoLongo } from "./pages/descansoLongo";
import { Ajuda } from "./pages/ajuda";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRoute="home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="home" component={Foco} />
          <Stack.Screen name="foco" component={Foco} />
          <Stack.Screen name="descansoCurto" component={DescansoCurto} />
          <Stack.Screen name="descansoLongo" component={DescansoLongo} />
          <Stack.Screen
            name="ajuda"
            component={Ajuda}
            options={{ headerShown: true, title: "Sobre o Método Pomodoro" }} // Reativa o cabeçalho para esta tela
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
