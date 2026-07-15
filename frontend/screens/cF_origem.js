import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from 'react-native';
import {useState} from 'react';
    
    const styles = StyleSheet.create({
        geral: {
            backgroundColor: '#280704',
        },
        botao:{
            backgroundColor: '#282828',
            padding: 12,
            borderRadius: 5, 
            margin: '1%',  
            marginTop: 10,
            width: '120%',
            height: 70,
            flex: 1,
            alignItems: 'center'
        },
        card: {
            backgroundColor: '#931b0f',
            marginLeft: '40%',
            marginTop: -170,
            padding: 10,
            borderWidth: 2,
            borderColor: '#5c0607',
            borderRadius: 5
        },
        container: {
            flexDirection: 'column',
            flex: 1,
            width: '30%'
        },
        texto1: {
            color: '#eda21b',
            fontWeight: 'bold',
        },
        texto2: {
            color: "#fff4e3",
        }
    })
    export default function App() {
            const [origem, setOrigem] = useState('');
            const [benPod, setBenPod] = useState('');
            const [benPer, setBenPer] = useState('');
            const [itens, setItens] = useState('');

    
            return (
            <ScrollView style={styles.geral}>
                <View style={styles.container}>
                <TouchableOpacity 
                    onPress={()=> {setOrigem("Estudioso\n")
                        setBenPod('\n•Poderes: Aparência Inofensiva, Palpite Fundamentado');
                        setBenPer('•Perícias: Conhecimento, Guerra, Misticismo');
                        setItens('\nItens: Coleção de livros (+1 em Conhecimento, Guerra, Misticismo ou Nobreza, a sua escolha).');
                    }} 
                    style={styles.botao}
                    ><Text style={styles.texto1}>Estudioso</Text></TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> {setOrigem("Gladiador\n")
                        setBenPod('\n•Poderes: Atraente, Pão e Circo, Torcida, um poder de combate a sua escolha');
                        setBenPer('•Perícias: Atuação, Luta');
                        setItens('\nItens: Uma arma marcial ou exótica, um item sem valor recebido de um admirador.');
                    }} 
                    style={styles.botao}
                    ><Text style={styles.texto1}>Gladiador</Text></TouchableOpacity>

                <TouchableOpacity 
                    onPress={()=> {setOrigem("Taverneiro\n")
                        setBenPod('\n•Poderes: Gororoba, Proficiência, Vitalidade');
                        setBenPer('•Perícias: Diplomacia, Jogatina, Ofício (cozinheiro)');
                        setItens('\nItens: Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava), uma panela, um avental, uma caneca e um pano sujo.');
                    }} 
                    style={styles.botao}
                    ><Text style={styles.texto1}>Taverneiro</Text></TouchableOpacity>
                    </View>
                
            <View style={styles.card}>
                <Text style={styles.texto1}>{origem}</Text>
                <Text style={styles.texto2}>Benefícios:</Text>
                <Text style={styles.texto2}>{benPod}</Text>
                <Text style={styles.texto2}>{benPer}</Text>
            </View>    

            </ScrollView>
    
    )
    
    }