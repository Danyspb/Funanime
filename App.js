import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler'
import AppNavigation from './Navigation/AppNavigation';


export default function App() {
  return (
        <SafeAreaView style={styles.container}>
          <View >
            <Text>
                    Hello 
              </Text>
            <AppNavigation />
          </View>
            
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffc2c2",
  },
});
