
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LogoCryptX from './src/components/molecules/LogoCryptX';

export default function App() {
  return (
    <View style={styles.container}>
      <LogoCryptX />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
