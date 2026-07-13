import {View, Text, TextInput, TouchableOpacity,
    StyleSheet, Alert} from 'react-native';
    
    const styles = StyleSheet.create({
        botao:{
            backgroundColor: '#007BFF',
            padding: 12,
            borderRadius: 5,   
            marginTop: 10
        }
    })
    export default function login({navigation}) {

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('criarFicha')}>
                <Text style={styles.buttonText}>Criar Ficha</Text>
            </TouchableOpacity>
        </View>

    )

    }