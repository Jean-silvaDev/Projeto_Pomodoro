// Importa o componente Text do React Native
import { Text } from "react-native";

// Componente funcional que exibe texto estilizado
// Recebe props:
// - children: conteúdo textual passado entre as tags <Texto>...</Texto>
// - style: estilos opcionais que podem ser aplicados por fora
export function Texto({ children, style }) {
  return (
    // Retorna um Text do React Native
    // Combina os estilos passados via prop 'style' com estilos padrão:
    // - color: branco
    // - fontSize: 25
    // - marginTop: 20
    <Text style={{ ...style, color: "white", fontSize: 25, marginTop: 20 }}>
      {children} {/* Conteúdo textual do componente */}
    </Text>
  );
}