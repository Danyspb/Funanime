import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigation from './Navigation/AppNavigation';


export default function App() {
  return (
      <SafeAreaProvider style={styles.container}>
        <SafeAreaView>
            <Text>
              Hello 
            </Text>
            <AppNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center'
  },
});
