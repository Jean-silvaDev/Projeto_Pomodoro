// Hooks do React para estado e efeitos
import { useEffect, useState } from 'react';

// AsyncStorage para persistir dados localmente (ex: contagem de ciclos)
import AsyncStorage from '@react-native-async-storage/async-storage';

// Componentes de UI do React Native
import { View, StyleSheet } from 'react-native';

// Componente que representa um "círculo de estado" do Pomodoro
// color -> cor base do ciclo (foco / pausa curta / longa)
// id -> posição do ciclo (ex: 1, 2, 3, 4)
export function Estado({ color, id }) {
  // Estado interno que indica se o ciclo está "cheio" ou "vazio"
  const [value, setValue] = useState('empty');

  // useEffect executa ao montar e toda vez que o `id` muda
  useEffect(() => {
    const verificaEstado = async () => {
      // Pega o ciclo atual armazenado no AsyncStorage
      const contagem = Number.parseInt(await AsyncStorage.getItem('tempo')) || 1;

      // Se o id do círculo >= contagem atual -> vazio, caso contrário -> cheio
      setValue(id >= contagem ? 'empty' : 'full');
    };

    verificaEstado();
  }, [id]);

  // Função que retorna o estilo correto baseado na cor e se o círculo está cheio/vazio
  const getStyle = () => {
    if (color === 'red') return value === 'full' ? styles.containerRedFull : styles.containerRed;
    if (color === 'purple') return value === 'full' ? styles.containerPurpleFull : styles.containerPurple;
    if (color === 'green') return value === 'full' ? styles.containerGreenFull : styles.containerGreen;
    return styles.containerRed;
  };

  // Renderiza um círculo com o estilo calculado
  return <View style={getStyle()} />;
}

// Base de estilo compartilhada entre todos os círculos
const baseStyle = {
  alignItems: 'center',           // Centraliza conteúdo horizontal
  justifyContent: 'center',       // Centraliza conteúdo vertical
  borderColor: 'white',           // Cor da borda
  borderStyle: 'solid',           // Tipo de borda
  borderWidth: 2,                 // Largura da borda
  borderRadius: 100,              // Forma circular
  width: 15,                      // Largura do círculo
  height: 15,                     // Altura do círculo
  flexDirection: 'row',           // Direção dos filhos (não usado, mas mantém consistência)
};

// Estilos finais aplicados aos círculos
const styles = StyleSheet.create({
  containerRed: {
    ...baseStyle,
    backgroundColor: 'red',        // Círculo vazio para foco
  },
  containerRedFull: {
    ...baseStyle,
    backgroundColor: 'white',      // Círculo cheio para foco
  },
  containerPurple: {
    ...baseStyle,
    backgroundColor: '#3E2D7C',   // Círculo vazio para descanso curto
  },
  containerPurpleFull: {
    ...baseStyle,
    backgroundColor: 'white',      // Círculo cheio para descanso curto
  },
  containerGreen: {
    ...baseStyle,
    backgroundColor: 'green',      // Círculo vazio para descanso longo
  },
  containerGreenFull: {
    ...baseStyle,
    backgroundColor: 'white',      // Círculo cheio para descanso longo
  },
});