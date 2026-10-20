
import React from 'react';
import { View, StyleSheet } from 'react-native';
import BrandText from '../atoms/BrandText';

export default function LogoCryptX() {
  return (
    <View style={styles.contenedor}>
      <BrandText texto="Crypt" color="#FFFFFF" />
      <BrandText texto="X" color="#6550FF" />
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
