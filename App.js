import { View } from 'react-native-web';
import Foco from './src/pages/foco';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { DescansoCurto } from './src/pages/descansoCurto';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRoute="home" >
          <Stack.Screen name="home" component={Foco} />
          <Stack.Screen name="foco" component={Foco} />
          <Stack.Screen name="descansoCurto" component={DescansoCurto} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const Stack = createNativeStackNavigator(); // Criando a pilha de navegação

const styles = StyleSheet.create({
  container: {
    width: '100vw',
    height: '100vh',
  }
});