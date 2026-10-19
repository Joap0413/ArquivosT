import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  geral: {
    backgroundColor: '#030b04',
  },
  botao: {
    backgroundColor: '#081d18',
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
    color: '#fffaf2',
  },
  texto2: {
    color: '#fffaf2',
  },
});
export default function login({ navigation }) {
  return (
    <ScrollView
      style={styles.geral}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <View>
        <Text style={{ fontSize: 48, fontWeight: 'bold', color: '#fffaf2' }}>
          Fichas Obscuras
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('escrevuras')}
      >
        <Text style={styles.texto1}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('AtriAspe')}
      >
        <Text style={styles.texto1}>Criar Ficha</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
