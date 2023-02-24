import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationRoutes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationRoutes />
    </>
  );
}
