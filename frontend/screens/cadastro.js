import { useState } from 'react';

import{ View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function Cadastro({navigation}) {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrarUsuario() {
        try {
            const resposta = 
            await fetch('http://localhost:3000/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nome, email, senha }),
            });
            
            const dados = await resposta.json();

            Alert.alert(dados.mensagem);
        
            setNome('');
            setEmail('');
            setSenha('');
    } catch (erro) {
        Alert.alert('Erro ao cadastrar usuário');
    }
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#280704',
  },
  card: {
    backgroundColor: '#931b0f',
     borderWidth: 2,
    borderColor: '#5c0607',
    borderRadius: 5,
    padding: 10

  },
  texto1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#eda21b',
  },
input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#5c0607', 
    color: "#fff4e3",
  },
  botao:{
            backgroundColor: '#282828',
            padding: 12,
            borderRadius: 5, 
            margin: '1%',  
            marginTop: 10,
            width: '100%',
            height: '10%',
            justifyContent: 'center',
            alignItems: 'center'
        },
  textoBotao: {
    color: '#eda21b',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


return (
<View style={styles.geral}>
    <View style={styles.card}>
    <Text style={styles.texto1}>Cadastro de Usuário</Text>
    
    <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        />
    <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        />
    <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        />
    <TouchableOpacity style={styles.botao} onPress={cadastrarUsuario}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
    </TouchableOpacity>

    </View>

</View>


)

}