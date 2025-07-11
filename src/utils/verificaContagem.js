import AsyncStorage from '@react-native-async-storage/async-storage';

export async function verificaContagem(navigation) {
    const contagem = Number.parseInt(await AsyncStorage.getItem('tempo'));

    if (contagem === 6) {
        await AsyncStorage.removeItem('nomeTarefa');
        await AsyncStorage.setItem('tempo', '1');
        navigation.navigate('foco');
    } else if (contagem % 2 === 0) {
        await AsyncStorage.setItem('tempo', String(contagem + 1));
        navigation.navigate('foco');
    } else if (contagem === 5) {
        await AsyncStorage.setItem('tempo', '6');
        navigation.navigate('descansoLongo');
    } else {
        await AsyncStorage.setItem('tempo', String(contagem + 1));
        navigation.navigate('descansoCurto');
    }
}