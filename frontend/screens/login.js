import { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function fazerLogin() {
    try {
      const resposta = await fetch('http://172.20.90.185:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          senha,
        }),
      });

      const dados = await resposta.json();

      console.log(dados);

      if (dados.sucesso) {
        Alert.alert('Sucesso', 'Login realizado com sucesso');
        //navigation.navigate('Home');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao fazer login');
      console.log(error);
    }
  }

  return (
    <View style={styles.geral}>
      <View style={styles.card}>
        <Text style={styles.texto1}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  geral: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030b04',
  },
  card: {
    backgroundColor: '#081d18',
    borderWidth: 2,
    borderColor: '#000c05',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  texto1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fffaf2',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#000c05',
    color: '#fffaf2',
  },
  botao: {
    backgroundColor: '#000c05',
    padding: 12,
    borderRadius: 5,
    margin: '1%',
    marginTop: 10,
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fffaf2',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
