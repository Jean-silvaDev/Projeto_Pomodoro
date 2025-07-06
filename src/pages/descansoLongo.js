import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";
import { CircleHelp, CirclePlay, PauseCircle, SkipForward } from "lucide-react";
import { Estados } from "../components/estados";
import { Texto } from "../components/texto";
import { StyleSheet, View } from "react-native";
import { useState } from "react";

export function DescansoLongo({ navigation }) {
  const [start, setStart] = useState(false);
  
  const handleStart = () => {
    setStart(!start);
  };

  return (
    <View style={styles.container}>
        <Cronometro color={'green'} time={15} start={start} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Botao color={'green'} onPress={handleStart}>
              {start ? <PauseCircle style={styles.icon} /> : <CirclePlay style={styles.icon} />}
            </Botao>
            <Botao color={'green'} onPress={() => navigation.navigate('foco')}>
                <SkipForward style={styles.iconNext}/>
            </Botao>
        </View>
        <Estados color={'green'} />
        <Texto>Tempo de Descanso Longo</Texto>
        <Texto>Tarefa 1</Texto>
        <Botao color={'green'} >
            <CircleHelp style={styles.iconQuestion} />
        </Botao>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  input: {
    height: 250,
    width: 250,
    borderColor: 'gray',
    borderWidth: 2,
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  icon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    color: '#green',
    borderRadius: 60,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: '#green',
    color: 'white',
    borderRadius: 60,
  },
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    color: 'green',
    borderRadius: "100%",
  }
});