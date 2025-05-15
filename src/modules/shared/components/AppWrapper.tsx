import React, {PropsWithChildren} from 'react';
// Components
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
// Theme
import theme from '@infrastructure/theme';

const STATUS_BAR_HEIGHT: number = StatusBar.currentHeight
  ? StatusBar.currentHeight
  : 0;

interface Props extends PropsWithChildren {}

const AppWrapper = ({children}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" animated translucent />
      <SafeAreaView style={styles.container} testID="test_safe_app_wrapper">
        {children}
      </SafeAreaView>
    </ThemeProvider>
  );
};

export {AppWrapper};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
  },
});
