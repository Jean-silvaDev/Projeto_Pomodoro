import { Cronometro } from "../components/cronometro";
import { Botao } from "../components/botao";
import { CircleHelp, CirclePlay, SkipForward } from "lucide-react";
import { Estados } from "../components/estados";
import { Texto } from "../components/texto";
import { StyleSheet, View } from "react-native";

export function DescansoCurto({ navigation }) {
  return (
    <View style={styles.container}>
        <Cronometro color={'purple'} time={'15:00'} />
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Botao color={'purple'}>
                <CirclePlay style={styles.icon} />
            </Botao>
            <Botao color={'purple'} onPress={() => navigation.navigate('foco')}>
                <SkipForward style={styles.iconNext}/>
            </Botao>
        </View>
        <Estados color={'purple'} />
        <Texto>Tempo de Descanso Curto</Texto>
        <Texto>Tarefa 1</Texto>
        <Botao color={'purple'} >
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
    backgroundColor: '#3E2D7C',
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
    color: '#3E2D7C',
    borderRadius: 60,
  },
  iconNext: {
    width: 40,
    height: 40,
    backgroundColor: '#3E2D7C',
    color: 'white',
    borderRadius: 60,
  },
  iconQuestion: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    color: '#3E2D7C',
    borderRadius: "100%",
  }
});