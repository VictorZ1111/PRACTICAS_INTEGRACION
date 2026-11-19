import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSolicitudes } from '../context/SolicitudesContext';

export default function ListaSolicitudes() {
  const { solicitudes, cambiarEstado } = useSolicitudes();

  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Solicitudes registradas</Text>

      {solicitudes.length === 0 ? (
        <Text style={styles.vacio}>
          Todavía no tienes solicitudes. Agrega la primera desde el formulario.
        </Text>
      ) : (
        solicitudes.map((solicitud) => {
          const pendiente = solicitud.estado === 'pendiente';

          return (
            <View key={solicitud.id} style={styles.solicitud}>
              <View style={styles.encabezado}>
                <Text style={styles.identificador}>
                  Solicitud #{solicitud.id}
                </Text>

                <Text
                  style={[
                    styles.estado,
                    pendiente ? styles.pendiente : styles.atendida,
                  ]}
                >
                  {pendiente ? 'Pendiente' : 'Atendida'}
                </Text>
              </View>

              <Text style={styles.descripcion}>{solicitud.texto}</Text>

              <Pressable
                accessibilityRole="button"
                accessibilityLabel={
                  pendiente
                    ? `Marcar solicitud ${solicitud.id} como atendida`
                    : `Volver solicitud ${solicitud.id} a pendiente`
                }
                onPress={() => cambiarEstado(solicitud.id)}
                style={({ pressed }) => [
                  styles.boton,
                  pressed && styles.botonPresionado,
                ]}
              >
                <Text style={styles.textoBoton}>
                  {pendiente ? 'Marcar como atendida' : 'Volver a pendiente'}
                </Text>
              </Pressable>
            </View>
          );
        })
      )}
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
    gap: 18,
    marginTop: 10,
  },
  titulo: {
    color: '#152238',
    fontSize: 23,
    fontWeight: '700',
  },
  vacio: {
    color: '#667085',
    fontSize: 15,
    lineHeight: 24,
    paddingVertical: 16,
  },
  solicitud: {
    borderTopWidth: 1,
    borderTopColor: '#E7ECF3',
    paddingTop: 20,
    gap: 14,
  },
  encabezado: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 10,
  },
  identificador: {
    color: '#344054',
    fontSize: 14,
    fontWeight: '600',
  },
  estado: {
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
  },
  pendiente: {
    backgroundColor: '#FFF4DB',
    color: '#8A5700',
  },
  atendida: {
    backgroundColor: '#E7F6ED',
    color: '#207447',
  },
  descripcion: {
    color: '#152238',
    fontSize: 16,
    lineHeight: 25,
  },
  boton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#CCD9F2',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  botonPresionado: {
    backgroundColor: '#EDF3FF',
  },
  textoBoton: {
    color: '#1557D5',
    fontSize: 14,
    fontWeight: '600',
  },
});