import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './src/navigation';

export default function App() {
  return (
    <SafeAreaProvider >
      <StatusBar
        animated={true}
        backgroundColor="#000066"
      />
      <Navigation />
    </SafeAreaProvider>
  );
}