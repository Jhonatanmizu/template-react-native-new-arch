# **Template React Native New Arch**

## **Goal**

The purpose of this repo is to create a standard template in React Native implementing the New Architecture with my favorite tools and best practices for building performant, maintainable applications.

---

## **Project Structure**

```
├── android/                # Android native code
├── ios/                    # iOS native code
├── src/
│   ├── assets/             # Static assets (images, fonts)
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── i18n/               # Internationalization files
│   ├── navigation/         # Navigation configuration
│   ├── screens/            # Screen components
│   ├── services/           # API and other services
│   ├── store/              # State management (Zustand)
│   ├── theme/              # Theme definitions
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── __tests__/              # Test files
├── babel.config.js         # Babel configuration with module-resolver
├── jest.config.js          # Jest configuration for testing
├── tsconfig.json           # TypeScript configuration
└── tsconfig.test.json      # TypeScript config for tests
```

---

## **License**

MIT

---

## **Routes**

The app contains the following key routes:

- **Payment Resume**: Displays a summary of the payment details.
- **Payment Success**: Shows a success screen upon completing a payment.
- **Processing Payment**: Indicates that the payment is being processed.

---

## **Features**

- **New React Native Architecture** - Implements the improved performance and capabilities of React Native's New Architecture
- **TypeScript Support** - Full TypeScript implementation for type safety
- **Module Aliasing** - Configured path aliases for cleaner imports using "@" prefix
- **Jest Testing Setup** - Properly configured for TypeScript and path aliases
- Select a payment method.
- Apply and configure installment options for payments.

---

### Core Libraries

- **React 18+**: A library for building user interfaces.
- **React Native 0.72+**: A framework for building native apps using React, with New Architecture support.

### State Management

- **Zustand**: A small, fast, and scalable state management library.
- **React Query**: Powerful data synchronization for API calls.

### Styling

- **@shopify/restyle**: A utility library for styling React Native components.

### Localization

- **i18next**: Internationalization framework.
- **react-i18next**: React bindings for i18next.

### Testing

- **Jest**: Testing framework configured for React Native
- **ts-jest**: TypeScript preprocessor for Jest
- **React Native Testing Library**: Utilities for testing React Native components

---

## **Screenshots**

---

## **Getting Started**

### **Prerequisites**

To run this project, you will need:

- A drink (highly recommend coffee ☕ for best performance)
- [Node.js](https://nodejs.org/) (recommended v18+)
- [Yarn](https://yarnpkg.com/) or npm as package manager
- A code editor (recommendation: [Visual Studio Code](https://code.visualstudio.com/))
- [Android Studio](https://developer.android.com/studio) for Android development
  - Android SDK Platform 33+
  - Android NDK 26.1.10909125 (specific version required)
- [Xcode](https://developer.apple.com/xcode/) (14+ recommended) for iOS development (Mac only)
- [CocoaPods](https://cocoapods.org/) for iOS dependencies (Mac only)
- [Watchman](https://facebook.github.io/watchman/docs/install) for file system watching

---

### **How to Run the Project**

1. Clone this repository to your local machine.
2. Install the project dependencies:
   ```bash
   yarn install
   ```
3. For iOS (Mac only), install CocoaPods dependencies:
   ```bash
   cd ios && pod install && cd ..
   ```
4. To enable the New Architecture for Android, create or update `android/local.properties` with your SDK and NDK paths:
   ```
   sdk.dir=/path/to/your/Android/sdk
   ndk.dir=/path/to/your/Android/sdk/ndk/26.1.10909125
   ```
5. Run the project:

   ```bash
   # For iOS
   yarn ios:dev

   # For Android
   yarn aos:dev
   ```

6. For development:
   ```bash
   # Start Metro bundler
   yarn start
   ```

---

## **Contributing**

Want to contribute? Here's how you can help:

1. Create a new branch for your changes:
   ```bash
   git checkout -b your-branch-name
   ```
2. Implement your changes and commit them with a meaningful message:
   ```bash
   git commit -m ":sparkles: feat: Your message here"
   ```
3. Push your branch to the remote repository:
   ```bash
   git push
   ```
4. Open a pull request and request a code review.

---

## **Git Workflow**

### Common Commands:

- **Create a new branch**:
  ```bash
  git checkout -b your-branch-name
  ```
- **Switch to a branch**:
  ```bash
  git checkout branch-name
  ```
- **Commit your changes**:
  ```bash
  git commit -m "Your commit message"
  ```
- **Push changes to remote**:
  ```bash
  git push
  ```
- **Pull updates from remote**:
  ```bash
  git pull
  ```

---

## **Development Setup**

Need help setting up your React Native environment? Check out [this guide](https://react-native.rocketseat.dev) for step-by-step instructions.

### **Path Aliases**

This project uses path aliases for cleaner imports. Instead of relative paths like `../../../components/Button`, you can use:

```javascript
// Before
import Button from '../../../components/Button';

// After
import Button from '@/components/Button';
```

Path aliases are configured in:

- `tsconfig.json` - For TypeScript resolution
- `babel.config.js` - For Babel transpilation
- `jest.config.js` - For testing with Jest

---

## **Troubleshooting**

### Path Alias Issues

If VS Code or Jest doesn't recognize path aliases:

- Restart TypeScript server: Ctrl+Shift+P → "TypeScript: Restart TS Server"
- Ensure `tsconfig.json` has correct `baseUrl` and `paths` configurations
- Run `yarn tsc --noEmit` to verify TypeScript configuration

### Android Build Issues

- Ensure NDK version 26.1.10909125 is installed through Android Studio
- Check that `local.properties` points to the correct SDK and NDK paths
- Try cleaning the project with `cd android && ./gradlew clean && cd ..`

### iOS Build Issues (Mac Only)

- Make sure CocoaPods is installed and pods are up to date: `cd ios && pod install && cd ..`
- Try cleaning the build: `cd ios && xcodebuild clean && cd ..`

---

## **Starting a Pull Request**

1. Create a branch based on the `main` branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit to your branch.
3. Push your branch to the remote repository.
4. Create a pull request and ensure it is reviewed before merging.

---
