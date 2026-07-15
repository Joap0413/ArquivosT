import StackNavigator from './navigation/StackNavigator';
import { useFonts } from 'expo-font'

export default function App() {
  const [fontsLoaded] = useFonts({
    'atormentado': require('./assets/fonts/Tormenta.ttf'),
  });
  return (
    <StackNavigator />
  );
}
