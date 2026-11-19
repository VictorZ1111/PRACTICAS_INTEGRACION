import { StyleSheet, Text, View } from 'react-native';
import { useSolicitudes } from '../context/SolicitudesContext';

export default function ResumenSolicitudes() {
  const { solicitudes } = useSolicitudes();

  const pendientes = solicitudes.filter(
    (solicitud) => solicitud.estado === 'pendiente',
  ).length;

  const indicadores = [
    { titulo: 'Total de solicitudes', cantidad: solicitudes.length },
    { titulo: 'Pendientes', cantidad: pendientes },
    { titulo: 'Atendidas', cantidad: solicitudes.length - pendientes },
  ];

  return (
    <View style={styles.resumen}>
      {indicadores.map((indicador) => (
        <View key={indicador.titulo} style={styles.tarjeta}>
          <Text style={styles.cantidad}>{indicador.cantidad}</Text>
          <Text style={styles.titulo}>{indicador.titulo}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  resumen: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
    marginBottom: 10,
  },
  tarjeta: {
    flexGrow: 1,
    flexBasis: 180,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#DCE4EF',
    borderRadius: 18,
    padding: 22,
    gap: 8,
  },
  cantidad: {
    color: '#1557D5',
    fontSize: 32,
    fontWeight: '700',
  },
  titulo: {
    color: '#667085',
    fontSize: 14,
  },
});