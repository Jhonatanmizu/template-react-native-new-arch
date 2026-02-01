import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { ENVIRONMENT } from '@env';
import { ENVIRONMENTS } from '@/modules/shared/enums';

const EnvironmentBanner = () => {
  const env = ENVIRONMENT;
  const { bannerColor, bannerText } = React.useMemo(() => {
    switch (env) {
      case ENVIRONMENTS.DEV:
        return { bannerColor: 'blue', bannerText: 'Development' };
      case ENVIRONMENTS.STAGING:
        return { bannerColor: 'orange', bannerText: 'Staging' };
      case ENVIRONMENTS.PROD:
        return { bannerColor: 'green', bannerText: 'Production' };
      default:
        return { bannerColor: 'gray', bannerText: 'Unknown' };
    }
  }, [env]);

  const customStyles: ViewStyle = {
    ...styles.container,
    backgroundColor: bannerColor,
  };

  if (ENVIRONMENT === ENVIRONMENTS.PROD) return null;

  return (
    <View style={customStyles}>
      <Text style={styles.text}>{bannerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export { EnvironmentBanner };
