module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@shared': './src/shared',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@services': './src/services',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@config': './src/config',
        },
      },
    ],
  ],
};
