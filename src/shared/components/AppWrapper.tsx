import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
// Components
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// Store
import {store} from '../../use-cases';

const STATUS_BAR_HEIGHT: number = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;

interface Props extends PropsWithChildren {}

const AppWrapper = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>{children}</Provider>
    </SafeAreaView>
  );
};

export {AppWrapper};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
  },
});
