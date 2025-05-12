import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const getStorage = () => storage;

export const setStorage = <T = any>(key: string, value: T): void => {
  storage.set(key, JSON.stringify(value));
};

export const getStorageValue = <T = any>(key: string): T | null => {
  const value = storage.getString(key);
  if (value !== undefined) {
    return JSON.parse(value) as T;
  }
  return null;
};

export const removeStorage = (key: string): void => {
  storage.delete(key);
};

export const clearStorage = (): void => {
  storage.clearAll();
};

export const getAllKeys = (): string[] => {
  return storage.getAllKeys();
};

export const getAllValues = <T = any>(): T[] => {
  return storage
    .getAllKeys()
    .map(key => getStorageValue<T>(key))
    .filter((value): value is T => value !== null);
};
