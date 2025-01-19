import React from 'react';
import Config from 'react-native-config';
import {Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

const STATUS_BAR_HEIGHT: number = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;

export default function App() {
  const environment = Config.ENVIRONMENT || '';

  return (
    <SafeAreaView style={styles.container}>
      <Text>{environment}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
    backgroundColor: 'red',
  },
});
