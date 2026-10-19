import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#030b04',
  },
  botao: {
    backgroundColor: '#081d18',
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#0d2e26',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    gap: 16,
    padding: 16,
  },
  card1: {
    width: '40%',
    backgroundColor: '#081d18',
    marginLeft: '5%',
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0d2e26',
    borderRadius: 5,
  },
  card2: {
    backgroundColor: '#081d18',
    marginLeft: '5%',
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#0d2e26',
    borderRadius: 5,
  },
  texto1: {
    fontWeight: 'bold',
    color: '#fffaf2',
  },
  texto2: {
    color: '#fffaf2',
  },
  atributo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  nomeAtributo: {
    color: '#fffaf2',
    fontWeight: 'bold',
  },
  controles: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  valorAtributo: {
    color: '#fffaf2',
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 20,
  },
  espaco: {
    marginLeft: '10%',
  },
});
export default function App() {
  const [carne, setCarne] = useState(0);
  const [forca, setForca] = useState(0);
  const [prontidao, setProntidao] = useState(0);
  const [determinacao, setDeterminacao] = useState(0);
  const [mente, setMente] = useState(0);
  const coragem = Math.floor((mente + determinacao) / 2);
  const dor = Math.floor((forca + prontidao) / 2);
  const folego = Math.floor((carne + determinacao) / 2);
  const protecao = Math.floor((carne + prontidao) / 2);
  const velocidade = Math.floor((prontidao + determinacao) / 2);
  const [pontoAtributo, setPontoAtributo] = useState(10);
  const maxCarne = 10;
  const maxForca = 10;
  const maxProntidao = 10;
  const maxDeterminacao = 10;
  const maxMente = 10;

  async function cadastrarFicha() {
    console.log("Entrou na Função")
    try {
      const resposta = await fetch('http://172.20.91.114:3000/cadastrarFicha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ carne, forca, prontidao, determinacao, mente, coragem, dor, folego, protecao, velocidade }),
      });

      const dados = await resposta.json();

      Alert.alert(dados.mensagem);
      setCarne('');
      setForca('');
      setProntidao('');
      setDeterminacao('');
      setMente('');
      } catch (erro) {
      Alert.alert('Erro ao cadastrar usuário');
    }
  }


  return (
    <ScrollView style={styles.geral}>
      <View style={styles.container}>
        <View style={styles.card1}>
          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Carne:</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setCarne(carne + 1);
                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>+</Text>
              </TouchableOpacity>

              <Text style={styles.valorAtributo}>{carne}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (carne > 0) {
                    setCarne(carne - 1);
                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Força:</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setForca(forca + 1);
                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>+</Text>
              </TouchableOpacity>

              <Text style={styles.valorAtributo}>{forca}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (forca > 0) {
                    setForca(forca - 1);
                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Prontidão:</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setProntidao(prontidao + 1);
                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>+</Text>
              </TouchableOpacity>

              <Text style={styles.valorAtributo}>{prontidao}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (prontidao > 0) {
                    setProntidao(prontidao - 1);
                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Determinação:</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setDeterminacao(determinacao + 1);
                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>+</Text>
              </TouchableOpacity>

              <Text style={styles.valorAtributo}>{determinacao}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (determinacao > 0) {
                    setDeterminacao(determinacao - 1);
                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>-</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Mente:</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setMente(mente + 1);
                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>+</Text>
              </TouchableOpacity>

              <Text style={styles.valorAtributo}>{mente}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (mente > 0) {
                    setMente(mente - 1);
                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
                style={styles.botao}
              >
                <Text style={styles.texto1}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.card2}>
          <Text style={styles.texto1}>Coragem: {coragem}</Text>
          <Text style={styles.texto1}>Dor: {dor}</Text>
          <Text style={styles.texto1}>Fôlego: {folego}</Text>
          <Text style={styles.texto1}>Proteção: {protecao}</Text>
          <Text style={styles.texto1}>Velocidade: {velocidade}</Text>
          <Text style={styles.texto1}>Pontos: {pontoAtributo}</Text>
          <TouchableOpacity style={styles.botao} onPress={cadastrarFicha}>
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}
