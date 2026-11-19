import { createContext, useContext, useRef, useState } from 'react';

const SolicitudesContext = createContext(null);

export function SolicitudesProvider({ children }) {
  const [solicitudes, setSolicitudes] = useState([]);
  const siguienteId = useRef(1);

  function agregarSolicitud(texto) {
    const descripcion = texto.trim();

    if (!descripcion) return false;

    const nuevaSolicitud = {
      id: String(siguienteId.current++),
      texto: descripcion,
      estado: 'pendiente',
    };

    setSolicitudes((actuales) => [...actuales, nuevaSolicitud]);
    return true;
  }

  function cambiarEstado(id) {
    setSolicitudes((actuales) =>
      actuales.map((solicitud) =>
        solicitud.id === id
          ? {
              ...solicitud,
              estado:
                solicitud.estado === 'pendiente'
                  ? 'atendida'
                  : 'pendiente',
            }
          : solicitud,
      ),
    );
  }

  return (
    <SolicitudesContext.Provider
      value={{ solicitudes, agregarSolicitud, cambiarEstado }}
    >
      {children}
    </SolicitudesContext.Provider>
  );
}

export function useSolicitudes() {
  const contexto = useContext(SolicitudesContext);

  if (contexto === null) {
    throw new Error(
      'useSolicitudes debe utilizarse dentro de SolicitudesProvider.',
    );
  }

  return contexto;
}