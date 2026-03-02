# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npx expo start          # Start development server (opens Expo Go QR code)
npx expo start --android  # Start with Android emulator
npx expo start --ios      # Start with iOS simulator
npx expo start --web      # Start web version
```

No test runner or linter is configured.

## Architecture

React Native + Expo app with bottom tab navigation. Entry flow:

1. `index.js` → registers `App` as root component via `registerRootComponent`
2. `App.js` → wraps everything in `SafeAreaProvider`, renders the `Navigation` stack
3. `App.js` uses React Navigation v7's **static navigation** pattern (tab config defined via `createBottomTabNavigator` with `screens` object at build time)
4. `pages/` → three screen components: `HomeScreen`, `SettingsScreen`, `PorfileScreen` (note: filename has a typo — missing 'r')

## Key Dependencies

- **React Navigation v7** with bottom tabs (`@react-navigation/native`, `@react-navigation/bottom-tabs`) — uses the static navigation API
- **React Native Elements** (`@rneui/base`, `@rneui/themed`) for UI components
- **Expo SDK 54** with New Architecture enabled (Fabric renderer, `newArchEnabled: true` in app.json)
- **React Native 0.83 / React 19**

## Notes

- JavaScript only (no TypeScript)
- `app.json` sets portrait-only orientation, enables iOS tablet support, and edge-to-edge on Android
- No environment config, no CI, no linting
