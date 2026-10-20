
import React from 'react';
import { Text, StyleSheet } from 'react-native';

type BrandTextProps = {
  texto: string;
  color?: string;
};

export default function BrandText({
  texto,
  color = '#FFFFFF',
}: BrandTextProps) {
  return (
    <Text style={[styles.texto, { color }]}>
      {texto}
    </Text>
  );
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: -2,
  },
});
