import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { useState } from 'react';

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#030b04',
  },

  container: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },

  titulo: {
    color: '#fffaf2',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#fff4e3',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },

  card: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: '#081d18',
    padding: 20,
    borderWidth: 2,
    borderColor: '#030b04',
    borderRadius: 10,
    marginBottom: 20,
  },

  tituloCard: {
    color: '#fffaf2',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },

  atributo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    paddingVertical: 5,
  },

  nomeAtributo: {
    color: '#fff4e3',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },

  controles: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  botaoAtributo: {
    backgroundColor: '#000c05',
    width: 40,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBotao: {
    color: '#fffaf2',
    fontSize: 24,
    fontWeight: 'bold',
  },

  valor: {
    color: '#fff4e3',
    fontSize: 20,
    fontWeight: 'bold',
    width: 45,
    textAlign: 'center',
  },

  pontos: {
    color: '#fffaf2',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#030b04',
  },

  derivado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#030b04',
  },

  nomeDerivado: {
    color: '#fff4e3',
    fontSize: 17,
  },

  valorDerivado: {
    color: '#fffaf2',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function App() {
  // =========================
  // ATRIBUTOS
  // =========================

  const [carne, setCarne] = useState(0);
  const [forca, setForca] = useState(0);
  const [prontidao, setProntidao] = useState(0);
  const [determinacao, setDeterminacao] = useState(0);
  const [mente, setMente] = useState(0);

  // =========================
  // PONTOS DISPONÍVEIS
  // =========================

  const [pontoAtributo, setPontoAtributo] = useState(10);

  // =========================
  // ASPECTOS
  // =========================

  const coragem = Math.floor((mente + determinacao) / 2);

  const dor = Math.floor((forca + prontidao) / 2);

  const folego = Math.floor((carne + determinacao) / 2);

  const protecao = Math.floor((carne + prontidao) / 2);

  const velocidade = Math.floor((prontidao + determinacao) / 2);

  return (
    <ScrollView style={styles.geral}>
      <View style={styles.container}>
        {/* =========================
                    TÍTULO
                ========================= */}

        {/* =========================
                    CARD DOS ATRIBUTOS
                ========================= */}

        <View style={styles.card}>
          <Text style={styles.tituloCard}>Atributos</Text>

          {/* CARNE */}

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Carne</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (carne > 0) {
                    setCarne(carne - 1);

                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>−</Text>
              </TouchableOpacity>

              <Text style={styles.valor}>{carne}</Text>

              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setCarne(carne + 1);

                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* FORÇA */}

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Força</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (forca > 0) {
                    setForca(forca - 1);

                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>−</Text>
              </TouchableOpacity>

              <Text style={styles.valor}>{forca}</Text>

              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setForca(forca + 1);

                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* PRONTIDÃO */}

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Prontidão</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (prontidao > 0) {
                    setProntidao(prontidao - 1);

                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>−</Text>
              </TouchableOpacity>

              <Text style={styles.valor}>{prontidao}</Text>

              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setProntidao(prontidao + 1);

                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* DETERMINAÇÃO */}

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Determinação</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (determinacao > 0) {
                    setDeterminacao(determinacao - 1);

                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>−</Text>
              </TouchableOpacity>

              <Text style={styles.valor}>{determinacao}</Text>

              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setDeterminacao(determinacao + 1);

                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* MENTE */}

          <View style={styles.atributo}>
            <Text style={styles.nomeAtributo}>Mente</Text>

            <View style={styles.controles}>
              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (mente > 0) {
                    setMente(mente - 1);

                    setPontoAtributo(pontoAtributo + 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>−</Text>
              </TouchableOpacity>

              <Text style={styles.valor}>{mente}</Text>

              <TouchableOpacity
                style={styles.botaoAtributo}
                onPress={() => {
                  if (pontoAtributo > 0) {
                    setMente(mente + 1);

                    setPontoAtributo(pontoAtributo - 1);
                  }
                }}
              >
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* PONTOS */}

          <Text style={styles.pontos}>Pontos disponíveis: {pontoAtributo}</Text>
        </View>

        {/* =========================
                    ATRIBUTOS DERIVADOS
                ========================= */}

        <View style={styles.card}>
          <Text style={styles.tituloCard}>Aspectos</Text>

          {/* CORAGEM */}

          <View style={styles.derivado}>
            <Text style={styles.nomeDerivado}>Coragem</Text>

            <Text style={styles.valorDerivado}>{coragem}</Text>
          </View>

          {/* DOR */}

          <View style={styles.derivado}>
            <Text style={styles.nomeDerivado}>Dor</Text>

            <Text style={styles.valorDerivado}>{dor}</Text>
          </View>

          {/* FÔLEGO */}

          <View style={styles.derivado}>
            <Text style={styles.nomeDerivado}>Fôlego</Text>

            <Text style={styles.valorDerivado}>{folego}</Text>
          </View>

          {/* PROTEÇÃO */}

          <View style={styles.derivado}>
            <Text style={styles.nomeDerivado}>Proteção</Text>

            <Text style={styles.valorDerivado}>{protecao}</Text>
          </View>

          {/* VELOCIDADE */}

          <View style={styles.derivado}>
            <Text style={styles.nomeDerivado}>Velocidade</Text>

            <Text style={styles.valorDerivado}>{velocidade}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
