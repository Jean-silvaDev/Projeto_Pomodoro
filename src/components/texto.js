// export function Texto({ children, style }) {
//   return (
//     <p style={{ ...style, color: 'white', fontSize: '25px' }}>
//       {children}
//     </p>
//   );
// }

import { Text } from "react-native";

export function Texto({ children, style }) {
  return (
    <Text style={{ ...style, color: "white", fontSize: 25, marginTop: 20 }}>
      {children}
    </Text>
  );
}
