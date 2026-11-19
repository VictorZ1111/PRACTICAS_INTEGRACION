import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { SolicitudesProvider } from './context/SolicitudesContext';
import FormularioSolicitud from './components/FormularioSolicitud';
import ResumenSolicitudes from './components/ResumenSolicitudes';
import ListaSolicitudes from './components/ListaSolicitudes';

export default function App() {
  return (
    <SolicitudesProvider>
      <StatusBar style="dark" />

      <ScrollView
        style={styles.pantalla}
        contentContainerStyle={styles.contenidoScroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <View style={styles.headerInterior}>
            <Text style={styles.logo}>I L I A</Text>

            <View style={styles.separador} />

            <Text style={styles.nombrePlataforma}>
              Ayuda académica
            </Text>
          </View>
        </View>

        <View style={styles.contenido}>
          <Text style={styles.etiqueta}>ÁREA PERSONAL</Text>

          <Text style={styles.titulo}>Mis solicitudes</Text>

          <Text style={styles.descripcion}>
            Organiza tus consultas y da seguimiento a la ayuda que necesitas.
          </Text>

          <ResumenSolicitudes />

          <FormularioSolicitud />

          <ListaSolicitudes />
        </View>
      </ScrollView>
    </SolicitudesProvider>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  contenidoScroll: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 4,
    borderTopColor: '#246BFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DCE4EF',
  },
  headerInterior: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
  },
  logo: {
    color: '#111111',
    fontSize: 25,
    fontWeight: '700',
  },
  separador: {
    width: 1,
    height: 28,
    backgroundColor: '#DCE4EF',
  },
  nombrePlataforma: {
    color: '#152238',
    fontSize: 16,
    fontWeight: '600',
  },
  contenido: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 42,
    paddingBottom: 48,
    gap: 14,
  },
  etiqueta: {
    color: '#1557D5',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2,
  },
  titulo: {
    color: '#152238',
    fontSize: 34,
    fontWeight: '700',
  },
  descripcion: {
    color: '#667085',
    fontSize: 16,
    lineHeight: 25,
    marginBottom: 18,
  },
});