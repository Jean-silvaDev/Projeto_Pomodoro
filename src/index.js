// Importa a função registerRootComponent do Expo
// Essa função serve para registrar o componente principal da aplicação
import { registerRootComponent } from 'expo';

// Importa o componente principal da aplicação, que é o App.js
import App from './App';

// registerRootComponent registra o componente raiz da aplicação.
// Ele faz internamente o equivalente a AppRegistry.registerComponent('main', () => App)
// garantindo que o aplicativo funcione tanto no Expo Go quanto em builds nativas.

// Chama a função passando o componente App, tornando-o o ponto de entrada do projeto
registerRootComponent(App);