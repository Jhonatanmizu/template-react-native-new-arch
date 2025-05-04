import React, {useEffect} from 'react';
import Config from 'react-native-config';
// Components
import {Text} from 'react-native';
import {AppWrapper} from './src/shared/components';

export default function App() {
  const environment = Config.ENVIRONMENT || 'development';
  const handleLoggerEnvironment = () => {
    const isDevelopmentOrStaging =
      environment === 'development' || environment === 'staging';
    if (!isDevelopmentOrStaging) {
      return;
    }
    console.warn('🚀 ~ App ~ environment:', environment);
  };

  useEffect(() => {
    handleLoggerEnvironment();
  }, []);

  return (
    <AppWrapper>
      <Text>{environment}</Text>
    </AppWrapper>
  );
}
