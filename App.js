import { useCallback } from 'react';
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './Navigation/AppNavigation';
import { SafeAreaProvider} from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();

export default function App() {

  let [Fontload] = useFonts({
    'sacramento': require('./assets/fonts/Sacramento-Regular.ttf'),
    'ultra': require('./assets/fonts/Ultra-Regular.ttf'),
    'lobster': require('./assets/fonts/Lobster-Regular.ttf'),
    'lobster2':require('./assets/fonts/LobsterTwo-Regular.ttf'),
    'playfaire': require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
    'dancing': require('./assets/fonts/DancingScript-Regular.ttf'),
    'prata': require('./assets/fonts/Prata-Regular.ttf'),
    'abril': require('./assets/fonts/AbrilFatface-Regular.ttf')
  })


  const onLayoutRootView = useCallback(async()=>{
    if(Fontload){
        await SplashScreen.hideAsync();
      }
    },[Fontload])

    if(!Fontload){
        return null;
    }

  return (
    <SafeAreaProvider style={styles.container} onLayout={onLayoutRootView}>
        <AppNavigation />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
