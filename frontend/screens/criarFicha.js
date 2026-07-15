import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView} from 'react-native';
    
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
            width: '80%',
            height: 70,
            flex: 1,
        },
        texto1: {
           fontWeight: 'bold',
           color: '#eda21b',
        },   
        texto2: {
            color: "#fff4e3",
        }

    })
    export default function login({navigation}) {

    return (
        <ScrollView style={styles.geral} contentContainerStyle={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cF_raca')}>
                <Text style={styles.texto1}>Raça</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cF_classe')}>
                <Text style={styles.texto1}>Classe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('cF_origem')}>
                <Text style={styles.texto1}>Origem</Text>
            </TouchableOpacity>

        </ScrollView>

    )

    }