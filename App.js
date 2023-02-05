
import { StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler'
import AppNavigation from './Navigation/AppNavigation';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require ('../assets/fonts/Lobster-Regular.ttf'),
    'Lobster-Two': require ('../assets/fonts/LobsterTwo-Regular.ttf'),
    'AbrilFatface': require ('../assets/fonts/AbrilFatface-Regular.ttf'),
    'DancingScript': require ('../assets/fonts/DancingScript-Regular.ttf'),
    'PlayfairDisplay': require ('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Sacramento': require ('../assets/fonts/Sacramento-Regular.ttf')

  });

  if(!fontsLoaded){
      return <AppLoading /> 
  }


  return (
    <SafeAreaProvider style={styles.container}>
        <AppNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
