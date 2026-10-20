
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import LogoCryptX from '../components/molecules/LogoCryptX';
import StartButton from '../components/molecules/StartButton';

export default function WelcomePage() {
  const [mensaje, setMensaje] = useState('');

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      {/* Logo existente del punto 3 */}
      <View style={styles.logo}>
        <LogoCryptX />
      </View>

      {/* Espacio para la imagen de Figma */}
      <View style={styles.imagenContenedor}>
        <View style={styles.imagenTemporal}>
          <Text style={styles.imagenTexto}>
            Imagen CryptX
          </Text>
        </View>
      </View>

      {/* Título y descripción */}
      <View style={styles.textos}>
        <Text style={styles.titulo}>
          Jump start your{'\n'}crypto portfolio
        </Text>

        <Text style={styles.descripcion}>
          Take your investment portfolio{'\n'}
          to next level
        </Text>
      </View>

      {/* Botón existente del punto 4 */}
      <View style={styles.boton}>
        <StartButton
          onPress={() => setMensaje('Bienvenido a CryptX')}
        />

        {mensaje !== '' && (
          <Text style={styles.mensaje}>
            {mensaje}
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
  },
  content: {
    flexGrow: 1,
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 30,
  },
  logo: {
    marginBottom: 25,
  },
  imagenContenedor: {
    flex: 1,
    minHeight: 260,
    maxHeight: 370,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenTemporal: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: '#35258C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenTexto: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  textos: {
    marginTop: 20,
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#FFFFFF',
    lineHeight: 36,
  },
  descripcion: {
    fontSize: 14,
    color: '#E0E0E0',
    lineHeight: 21,
    marginTop: 24,
  },
  boton: {
    marginTop: 35,
    alignItems: 'center',
  },
  mensaje: {
    marginTop: 16,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
