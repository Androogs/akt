import { useEffect } from "react";
import { dealer } from "../data/dealer.js";
import { useSede } from "./SedeContext.jsx";
import { IconPin, IconPhone, IconClose, IconCheck, IconWrench } from "./Icons.jsx";

export default function SedeModal() {
  const { sede, elegirSede, cerrarModal, modalOpen, esPrimeraVez } = useSede();

  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen ]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") cerrarModal(); };
    if (modalOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen, cerrarModal]);

  if (!modalOpen) return null;

  return (
    <div className="sede-modal__overlay" onClick={cerrarModal} role="dialog" aria-modal="true" aria-label="Elige tu sede más cercana">
      <div className="sede-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sede-modal__stripe" aria-hidden="true" />
        <button className="sede-modal__close" onClick={cerrarModal} aria-label="Cerrar">
          <IconClose width="20" height="20" />
        </button>
        <div className="sede-modal__head">
          <img src="/akt-logo-white-crop.png" alt="AKT Motos" className="sede-modal__logo" />
          <span className="eyebrow">Sumoto S.A. · Concesionario oficial AKT</span>
          <h2 className="h-display h-display--sm">¿Cuál es tu sede más cercana?</h2>
          <p className="muted">Elige tu sede y personalizamos dirección, contactos y mapa en todo el sitio.</p>
        </div>
        <div className="sede-modal__grid">
          {dealer.oficinas.map((o) => {
            const activa = sede?.id === o.id;
            return (
              <button
                key={o.id}
                className={`sede-card ${activa ? "is-active" : ""}`}
                onClick={() => elegirSede(o.id)}
              >
                <span className="sede-card__top">
                  <IconPin width="18" height="18" />
                  <strong>{o.nombre}</strong>
                  {activa && <span className="sede-card__check"><IconCheck width="14" height="14" style={{ color: "#fff", stroke: "#fff" }} /> Actual</span>}
                </span>
                <span className="sede-card__dir">{o.direccion}</span>
                <span className="sede-card__meta">
                  <span><IconPhone width="14" height="14" /> {o.asesores?.[0]?.telefono || dealer.phone}{o.asesores?.length > 1 ? ` · +${o.asesores.length - 1}` : ""}</span>
                  {o.tallerRepuestos && <span><IconWrench width="14" height="14" /> Taller</span>}
                </span>
                <span className="sede-card__cta">{activa ? "Sede actual" : "Elegir esta sede"}</span>
              </button>
            );
          })}
        </div>
        {!esPrimeraVez && (
          <p className="sede-modal__foot">Tu elección se guarda en este navegador. Puedes cambiarla cuando quieras con “Cambiar sede”.</p>
        )}
      </div>
    </div>
  );
}
