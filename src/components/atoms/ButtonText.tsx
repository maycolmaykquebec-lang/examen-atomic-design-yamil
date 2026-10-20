
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type ButtonTextProps = {
  texto: string;
};

export default function ButtonText({ texto }: ButtonTextProps) {
  return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});
