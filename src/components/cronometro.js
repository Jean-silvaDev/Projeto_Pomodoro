// import { useEffect, useRef, useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import { verificaContagem } from '../utils/verificaContagem';

// export function Cronometro({ color, time, start, navigation }) {
//   const [remaining, setRemaining] = useState(time * 60);
//   const intervalRef = useRef(null);

//   useEffect(() => {
//     if (start) {
//       intervalRef.current = setInterval(() => {
//         setRemaining((prev) => {
//           if (prev <= 1) {
//             clearInterval(intervalRef.current);
//             verificaContagem(navigation);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [start]);

//   useEffect(() => {
//     setRemaining(time * 60);
//   }, [time]);

//   const formatTime = (totalSeconds) => {
//     const min = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
//     const sec = String(totalSeconds % 60).padStart(2, '0');
//     return `${min}:${sec}`;
//   };

//   const getContainerStyle = () => {
//     if (color === 'red') return styles.containerRed;
//     if (color === 'purple') return styles.containerPurple;
//     if (color === 'green') return styles.containerGreen;
//     return styles.containerRed;
//   };

//   return (
//     <View style={getContainerStyle()}>
//       <Text style={styles.cronometro}>{formatTime(remaining)}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   containerRed: {
//     backgroundColor: 'red',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: 150,
//     height: 150,
//     margin: 20,
//   },
//   containerPurple: {
//     backgroundColor: '#3E2D7C',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: 150,
//     height: 150,
//     margin: 20,
//   },
//   containerGreen: {
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: 150,
//     height: 150,
//     margin: 20,
//   },
//   cronometro: {
//     fontSize: 30,
//     color: 'white',
//   },
// });

// FILE: components/Cronometro.js
import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { verificaContagem } from "../utils/verificaContagem";

// Named export
export function Cronometro({ color, time, start, navigation }) {
  const [remaining, setRemaining] = useState(time * 60);
  const intervalRef = useRef(null);

  // useEffect for timer logic
  useEffect(() => {
    // Se não for para iniciar, não faz nada.
    if (!start) {
      return;
    }

    // Inicia o intervalo
    intervalRef.current = setInterval(() => {
      setRemaining((prev) => {
        if (prev <= 1) {
          // Limpa o intervalo quando o tempo acaba
          clearInterval(intervalRef.current);
          verificaContagem(navigation);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // FIX: Função de limpeza aprimorada.
    // Ela será executada quando o componente for desmontado
    // ou quando a dependência 'start' mudar.
    // Isso garante que o intervalo seja sempre limpo.
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start, navigation]);

  // useEffect to reset the time when the `time` prop changes
  useEffect(() => {
    setRemaining(time * 60);
  }, [time]);

  const formatTime = (totalSeconds) => {
    const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const sec = String(totalSeconds % 60).padStart(2, "0");
    return `${min}:${sec}`;
  };

  // REFINEMENT: Usando um estilo base e aplicando a cor dinamicamente
  // para evitar repetição de código.
  const containerStyle = [
    styles.containerBase,
    { backgroundColor: color === "purple" ? "#3E2D7C" : color },
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.cronometro}>{formatTime(remaining)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // REFINEMENT: Estilo base para os containers
  containerBase: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    width: 150,
    height: 150,
    margin: 20,
    // FIX: borderRadius corrigido para ser metade da altura/largura
    borderRadius: 75,
  },
  cronometro: {
    fontSize: 30,
    color: "white",
  },
});
