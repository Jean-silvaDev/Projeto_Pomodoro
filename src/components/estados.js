// import { StyleSheet, Text, View } from 'react-native';
// import { Estado } from './estado';

// export function Estados({ color }) {
//   return (
//     <div style={color == 'red' ? styles.containerRed : (color == 'purple' ? styles.containerPurple : styles.containerGreen)}>
//         <Estado color={color} id={1} />
//         <Estado color={color} id={2} />
//         <Estado color={color} id={3} />
//         <Estado color={color} id={4} />
//         <Estado color={color} id={5} />
//         <Estado color={color} id={6} />
//     </div>
//   );
// }

// const styles = StyleSheet.create({
//   containerRed: {
//     backgroundColor: 'red',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: "25vw",
//     height: "55vh",
//     gap: 10,
//   },
//   containerPurple: {
//     backgroundColor: '#3E2D7C',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: "25vw",
//     height: "55vh",
//     gap: 10,
//   },
//   containerGreen: {
//     backgroundColor: 'green',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 2,
//     borderRadius: "100%",
//     width: "25vw",
//     height: "55vh",
//     gap: 10,
//   }
// });

import { StyleSheet, View } from "react-native";
import { Estado } from "./estado";

export function Estados({ color }) {
  const estilo =
    color === "red"
      ? styles.containerRed
      : color === "purple"
      ? styles.containerPurple
      : styles.containerGreen;

  return (
    <View style={estilo}>
      <Estado color={color} id={1} />
      <Estado color={color} id={2} />
      <Estado color={color} id={3} />
      <Estado color={color} id={4} />
      <Estado color={color} id={5} />
      <Estado color={color} id={6} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerRed: {
    flexDirection: "row", // ✅ BOLINHAS EM LINHA
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    gap: 8, // espaçamento entre bolinhas
  },
  containerPurple: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3E2D7C",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    gap: 8,
  },
  containerGreen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    padding: 10,
    gap: 8,
  },
});
