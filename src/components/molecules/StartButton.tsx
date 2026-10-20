
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import ButtonText from '../atoms/ButtonText';

type StartButtonProps = {
  onPress: () => void;
};

export default function StartButton({
  onPress,
}: StartButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.boton,
        pressed && styles.presionado,
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Get Started"
    >
      <ButtonText texto="Get Started" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    width: '100%',
    maxWidth: 320,
    minHeight: 48,
    backgroundColor: '#6753FF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  presionado: {
    opacity: 0.8,
  },
});
