import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Test() {
  const [fontsLoaded] = useFonts({
    'AbrilFatface-Regular': require('../assets/fonts/AbrilFatface-Regular.ttf'),
    'DancingScript-Regular': require('../assets/fonts/DancingScript-Regular.ttf'),
    'Lobster-Regular': require('../assets/fonts/Lobster-Regular.ttf'),
    'LobsterTwo-Regular': require('../assets/fonts/LobsterTwo-Regular.ttf'),
    'PlayfairDisplay-Regular': require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
    'Sacramento-Regular': require('../assets/fonts/Sacramento-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

}
