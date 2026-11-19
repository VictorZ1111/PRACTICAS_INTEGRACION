import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { useSolicitudes } from '../context/SolicitudesContext';

export default function FormularioSolicitud() {
  const [texto, setTexto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { agregarSolicitud } = useSolicitudes();

  function enviar() {
    if (!agregarSolicitud(texto)) {
      setMensaje('Escribe tu solicitud antes de agregarla.');
      return;
    }

    setTexto('');
    setMensaje('Solicitud agregada correctamente.');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Nueva solicitud</Text>
      <Text style={styles.descripcion}>
        Cuéntanos en qué necesitas ayuda para continuar aprendiendo.
      </Text>

      <Text style={styles.label}>Descripción de la solicitud</Text>

      <TextInput
        accessibilityLabel="Descripción de la solicitud"
        placeholder="Ejemplo: Necesito ayuda con el ejercicio de Python"
        placeholderTextColor="#7B8494"
        value={texto}
        onChangeText={(valor) => {
          setTexto(valor);
          setMensaje('');
        }}
        multiline
        maxLength={300}
        style={styles.input}
      />

      <Text style={styles.caracteres}>{texto.length}/300</Text>

      <Pressable
        accessibilityRole="button"
        onPress={enviar}
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
      >
        <Text style={styles.textoBoton}>Agregar solicitud</Text>
      </Pressable>

      {mensaje ? (
        <Text accessibilityLiveRegion="polite" style={styles.mensaje}>
          {mensaje}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE4EF',
    borderRadius: 22,
    padding: 26,
    gap: 12,
  },
  titulo: {
    fontSize: 23,
    fontWeight: '700',
    color: '#152238',
  },
  descripcion: {
    color: '#667085',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 10,
  },
  label: {
    color: '#344054',
    fontSize: 14,
    fontWeight: '600',
  },
  input: {
    minHeight: 120,
    backgroundColor: '#F7F9FC',
    borderWidth: 1,
    borderColor: '#D0D8E5',
    borderRadius: 14,
    padding: 16,
    color: '#152238',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  caracteres: {
    color: '#667085',
    fontSize: 12,
    textAlign: 'right',
  },
  boton: {
    backgroundColor: '#1557D5',
    borderRadius: 14,
    paddingVertical: 17,
    alignItems: 'center',
  },
  botonPresionado: {
    backgroundColor: '#1045AA',
  },
  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  mensaje: {
    color: '#1557D5',
    fontSize: 14,
    lineHeight: 21,
  },
});