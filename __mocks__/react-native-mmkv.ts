const mockStore: Record<string, string> = {};

export class MMKV {
  set(key: string, value: string) {
    mockStore[key] = value;
  }

  getString(key: string) {
    return mockStore[key];
  }

  delete(key: string) {
    delete mockStore[key];
  }

  clearAll() {
    Object.keys(mockStore).forEach(key => delete mockStore[key]);
  }

  getAllKeys() {
    return Object.keys(mockStore);
  }
}
