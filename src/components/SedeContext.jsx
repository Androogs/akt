import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dealer, getSedeById } from "../data/dealer.js";

const KEY = "akt_sede_id";
const SedeCtx = createContext(null);

function leerGuardada() {
  try {
    return window.localStorage.getItem(KEY) || null;
  } catch {
    return null;
  }
}

export function SedeProvider({ children }) {
  const [sedeId, setSedeIdState] = useState(() => leerGuardada());
  const [modalOpen, setModalOpen] = useState(false);
  const [esPrimeraVez, setEsPrimeraVez] = useState(true);

  // Apertura automática solo en la primera visita (sin sede guardada)
  useEffect(() => {
    if (!leerGuardada()) {
      const t = setTimeout(() => {
        setEsPrimeraVez(true);
        setModalOpen(true);
      }, 700);
      return () => clearTimeout(t);
    }
    setEsPrimeraVez(false);
  }, []);

  const elegirSede = useCallback((id) => {
    setSedeIdState(id);
    try {
      window.localStorage.setItem(KEY, id);
    } catch {
      /* sin almacenamiento */
    }
    setEsPrimeraVez(false);
    setModalOpen(false);
    // Avisar al resto de la app (por si algún componente escucha)
    try {
      window.dispatchEvent(new CustomEvent("akt:sede", { detail: id }));
    } catch {
      /* noop */
    }
  }, []);

  const abrirModal = useCallback(() => {
    setEsPrimeraVez(false);
    setModalOpen(true);
  }, []);

  const cerrarModal = useCallback(() => {
    // En primera visita se puede cerrar sin elegir (queda Palmira S1 por defecto)
    setModalOpen(false);
    setEsPrimeraVez(false);
  }, []);

  const sede =
    (sedeId && getSedeById(sedeId)) ||
    getSedeById("palmira-1") ||
    dealer.oficinas[0];

  const value = useMemo(
    () => ({ sede, sedeId: sede?.id || null, elegirSede, abrirModal, cerrarModal, modalOpen, esPrimeraVez }),
    [sede, sedeId, elegirSede, abrirModal, cerrarModal, modalOpen, esPrimeraVez]
  );

  return <SedeCtx.Provider value={value}>{children}</SedeCtx.Provider>;
}

export function useSede() {
  const ctx = useContext(SedeCtx);
  if (!ctx) return { sede: dealer.oficinas[0], sedeId: null, elegirSede: () => {}, abrirModal: () => {}, cerrarModal: () => {}, modalOpen: false, esPrimeraVez: false };
  return ctx;
}
