import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AtriAspe from '../screens/AtriAspe';
import escrevuras from '../screens/escrevuras';
import Cadastro from '../screens/cadastro';
import listaUsuarios from '../screens/listaUsuarios';
import login from '../screens/login';
import principal from '../screens/principal';
import transicao from '../screens/transicao';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="principal" component={principal} />

        <Stack.Screen name="transicao" component={transicao} />

        <Stack.Screen name="Cadastro" component={Cadastro} />

        <Stack.Screen name="listaUsuarios" component={listaUsuarios} />

        <Stack.Screen name="login" component={login} />

        <Stack.Screen name="escrevuras" component={escrevuras} />

        <Stack.Screen name="AtriAspe" component={AtriAspe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
