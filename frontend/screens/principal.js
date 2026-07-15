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

            <View>
                <Text style={{fontSize: 48, fontWeight: 'bold', color: '#eda21b', fontFamily: 'atormentado'}}>
                    Arquivos de Talude
                </Text>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('login')}>
                <Text style={styles.texto1}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('criarFicha')}>
                <Text style={styles.texto1}>Criar Ficha</Text>
            </TouchableOpacity>

        </ScrollView>

    )

    }