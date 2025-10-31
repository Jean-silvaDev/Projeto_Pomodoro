// Importa o AsyncStorage, usado para salvar dados localmente no dispositivo
import AsyncStorage from '@react-native-async-storage/async-storage';

// Função assíncrona responsável por verificar o estado da contagem do Pomodoro
// e decidir qual tela deve ser aberta (foco, descanso curto ou descanso longo)
export async function verificaContagem(navigation) {

    // Recupera o valor salvo em "tempo" e converte para número
    const contagem = Number.parseInt(await AsyncStorage.getItem('tempo'));

    // ✅ Caso tenha atingido 6 ciclos (final do ciclo pomodoro completo)
    if (contagem === 6) {
        // Remove o nome da tarefa salva
        await AsyncStorage.removeItem('nomeTarefa');

        // Reinicia a contagem para 1
        await AsyncStorage.setItem('tempo', '1');

        // Redireciona para a tela de foco
        navigation.navigate('foco');

    // ✅ Se a contagem for par → ciclo de foco
    // Ex.: 2, 4 → volta para foco
    } else if (contagem % 2 === 0) {
        await AsyncStorage.setItem('tempo', String(contagem + 1));
        navigation.navigate('foco');

    // ✅ Se contagem chegou a 5 → descanso longo
    } else if (contagem === 5) {
        // Próxima etapa será o valor 6
        await AsyncStorage.setItem('tempo', '6');
        navigation.navigate('descansoLongo');

    // ✅ Caso contrário → descanso curto
    } else {
        await AsyncStorage.setItem('tempo', String(contagem + 1));
        navigation.navigate('descansoCurto');
    }
}