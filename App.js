import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Navigator from './routes/Header'
import Tabs from './navigation/Tabs'

export default function App() {
  return (
    <View style={styles.container}>
      <Navigator />
      <Tabs />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
