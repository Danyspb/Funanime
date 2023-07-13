
import { StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './Navigation/AppNavigation';
import { SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {

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
