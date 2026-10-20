
import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Platform,
} from 'react-native';

import LogoCryptX from './src/components/molecules/LogoCryptX';
import StartButton from './src/components/molecules/StartButton';

export default function App() {
  const iniciar = () => {
    if (Platform.OS === 'web') {
      window.alert('Bienvenido a CryptX');
    } else {
      Alert.alert('CryptX', 'Bienvenido a CryptX');
    }
  };

  return (
    <View style={styles.container}>
      <LogoCryptX />
      <StartButton onPress={iniciar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 40,
  },
});
