import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigation from './Navigation/AppNavigation';
import 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context';




export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Open up App.js to start working on your app!</Text>
        <AppNavigation />
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
