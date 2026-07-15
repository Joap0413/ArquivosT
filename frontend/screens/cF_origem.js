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
            const [origem, setOrigem] = useState('');
            const [benPod, setBenPod] = useState('');
            const [benPer, setBenPer] = useState('');
            const [itens, setItens] = useState('');

    
            return (
            <View>
                <TouchableOpacity 
                    onPress={()=> {setOrigem("Estudioso\n")
                    setBenPod('\n•Poderes: Aparência Inofensiva, Palpite Fundamentado');
                    setBenPer('•Perícias: Conhecimento, Guerra, Misticismo');
                    setItens('\nItens: Coleção de livros (+1 em Conhecimento, Guerra, Misticismo ou Nobreza, a sua escolha).');
                    }} 
                    style={styles.botao}
                >Estudioso</TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> {setOrigem("Gladiador\n")
                    setBenPod('\n•Poderes: Atraente, Pão e Circo, Torcida, um poder de combate a sua escolha');
                    setBenPer('•Perícias: Atuação, Luta');
                    setItens('\nItens: Uma arma marcial ou exótica, um item sem valor recebido de um admirador.');
                    }} 
                    style={styles.botao}
                >Gladiador</TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> {setOrigem("Taverneiro\n")
                    setBenPod('\n•Poderes: Gororoba, Proficiência, Vitalidade');
                    setBenPer('•Perícias: Diplomacia, Jogatina, Ofício (cozinheiro)');
                    setItens('\nItens: Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava), uma panela, um avental, uma caneca e um pano sujo.');
                    }} 
                    style={styles.botao}
                >Taverneiro</TouchableOpacity>
    
                <Text>{origem}</Text>
                <Text>Benefícios:</Text>
                <Text>{benPod}</Text>
                <Text>{benPer}</Text>

            </View>
    
    )
    
    }