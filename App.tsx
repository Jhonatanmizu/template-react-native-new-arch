import React, {useEffect} from 'react';
import Config from 'react-native-config';
// Components
import {AppWrapper} from '@shared/components';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from '@/modules/routes';

export default function App() {
  const environment = Config.ENVIRONMENT || 'development';
  const handleLoggerEnvironment = () => {
    const isDevelopmentOrStaging =
      environment === 'development' || environment === 'staging';
    if (!isDevelopmentOrStaging) {
      return;
    }
    console.log('🚀 ~ App ~ environment:', environment);
  };

  useEffect(() => {
    handleLoggerEnvironment();
  }, []);

  return (
    <NavigationContainer>
      <AppWrapper>
        <RootStack />
      </AppWrapper>
    </NavigationContainer>
  );
}
