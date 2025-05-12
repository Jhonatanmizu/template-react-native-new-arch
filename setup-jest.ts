import '@testing-library/react-native';
import {MMKV} from 'react-native-mmkv';

// Reset MMKV storage between tests
beforeEach(() => {
  const mmkv = new MMKV();
  mmkv.clearAll();
});
