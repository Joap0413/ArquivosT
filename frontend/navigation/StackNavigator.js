import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import Cadastro from '../screens/cadastro';
import listaUsuarios from '../screens/listaUsuarios';
import login from '../screens/login';
import transicao from '../screens/transicao'
import principal from '../screens/principal'
import criarFicha from '../screens/criarFicha'
import cF_raca from '../screens/cF_raca'
import cF_classe from '../screens/cF_classe'
import cF_origem from '../screens/cF_origem'

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='principal' component={principal} />
      
        <Stack.Screen name='transicao' component={transicao} />
        
        <Stack.Screen name='Cadastro' component={Cadastro} />

        <Stack.Screen name='listaUsuarios' component={listaUsuarios} />

        <Stack.Screen name='login' component={login} />

        <Stack.Screen name='criarFicha' component={criarFicha} />

        <Stack.Screen name='cF_raca' component={cF_raca} />

        <Stack.Screen name='cF_classe' component={cF_classe} />

        <Stack.Screen name='cF_origem' component={cF_origem} />
      
      </Stack.Navigator>
      
     


    </NavigationContainer>

);
}
