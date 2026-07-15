import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useState} from 'react';
    
    const styles = StyleSheet.create({
        botao:{
            backgroundColor: '#007BFF',
            padding: 12,
            borderRadius: 5,   
            marginTop: 10
        }
    })
    export default function App() {
        const [raca, setRaca] = useState('');
        const [forca, setForca] = useState('0');
        const [destreza, setDestreza] = useState('0');
        const [constituicao, setConstituicao] = useState('0');
        const [inteligencia, setInteligencia] = useState('0');
        const [sabedoria, setSabedoria] = useState('0');
        const [carisma, setCarisma] = useState('0');
        const [hab1, setHab1] = useState('');
        const [hab2, setHab2] = useState('');
        const [hab3, setHab3] = useState('');
        const [hab4, setHab4] = useState('');

        return (
        <View>
            <TouchableOpacity 
                onPress={()=> {setRaca('Minotauro'); 
                setForca('+2');
                setDestreza('+0'); 
                setConstituicao('+1');
                setInteligencia('+0');
                setSabedoria('-1');
                setCarisma('+0');
                setHab1('\nChifres\nVocê possui uma arma natural de chifres (dano 1d6, crítico x2,  perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.')
                setHab2('\nCouro Rígido\nSua pele é dura como a de um touro. Você recebe +1 na Defesa.');
                setHab3('\nFaro\nVocê tem olfato apurado. Contra possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.');
                setHab4('\nMedo de Altura\nSe estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.');
                }} 
                style={styles.botao}
            >Minotauro</TouchableOpacity>

            <TouchableOpacity 
                onPress={()=> {setRaca('Anão'); 
                setForca('+0');
                setDestreza('-1'); 
                setConstituicao('+2');
                setInteligencia('+0');
                setSabedoria('+1');
                setCarisma('+0');
                setHab1('\nConhecimento das Rochas\nVocê recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.')
                setHab2('\nDevagar e Sempre\nSeu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.');
                setHab3('\nDuro Como Pedra\nVocê recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.');
                setHab4('\nTradição de Heredrimm\nVocê é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.');
                }} 
                style={styles.botao}
            >Anão</TouchableOpacity>

            <TouchableOpacity 
                onPress={()=> {setRaca('Elfo'); 
                setForca('+0');
                setDestreza('+1'); 
                setConstituicao('-1');
                setInteligencia('+2');
                setSabedoria('+0');
                setCarisma('+0');
                setHab1('\nGraça de Glórienn\nSeu deslocamento é de 12m (em vez de 9m).\n')
                setHab2('\nSangue Mágico\nVocê recebe +1 ponto de mana por nível.\n');
                setHab3('\nSentidos Élficos\nVocê recebe visão na penumbra e +2 em Misticismo e Percepção.\n');
                setHab4('\n');
                }} 
                style={styles.botao}
            >Elfo</TouchableOpacity>

            <Text>{raca}</Text>
            <Text>For: {forca}</Text>
            <Text>Des: {destreza}</Text>
            <Text>Con: {constituicao}</Text>
            <Text>Int: {inteligencia}</Text>
            <Text>Sab: {sabedoria}</Text>
            <Text>Car: {carisma}</Text>
            <Text>{hab1}</Text>
            <Text>{hab2}</Text>
            <Text>{hab3}</Text>
            <Text>{hab4}</Text>

            
        </View>

)

}

