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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cF_raca')}>
                <Text style={styles.buttonText}>Raça</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cF_classe')}>
                <Text style={styles.buttonText}>Classe</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cF_origem')}>
                <Text style={styles.buttonText}>Origem</Text>
            </TouchableOpacity>

        </View>

    )

    }