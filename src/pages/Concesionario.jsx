import { dealer, waLink, waAsesor } from "../data/dealer.js";
import { useSede } from "../components/SedeContext.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { IconPin, IconClock, IconPhone, IconMail, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield } from "../components/Icons.jsx";

export default function Concesionario() {
  const { sede, abrirModal } = useSede();
  const actual = sede || dealer.oficinas[0];
  return (
    <>
      <PageHeader eyebrow={`${dealer.businessName} · ${actual.nombre}`} title={actual.nombre} crumbs={[{ label: "Concesionario" }, { label: actual.nombre }]}>
        <p>Te esperamos en {actual.direccion}. Ven y encuentra tu próxima AKT.</p>
      </PageHeader>
      <section className="sec sec--tight">
        <div className="container store">
          <div className="store__about">
            <span className="eyebrow">Tu sede: {actual.nombre}</span>
            <h2 className="h-display">Tu punto AKT en el Valle del Cauca</h2>
            <p className="muted">Todo lo de tu sede {actual.nombre}, en un solo lugar.</p>
            <div className="store__services">
              {[[IconShield, "Motos nuevas AKT"], [IconCard, "Financiación"], [IconWrench, "Taller especializado"], [IconBox, "Repuestos y accesorios"]].map(([I, t]) => (
                <div key={t}><I /><span>{t}</span></div>
              ))}
            </div>
            <button type="button" className="btn btn--line-dark btn--sm" onClick={abrirModal} style={{ marginTop: 14 }}>
              <IconPin width="16" height="16" /> Cambiar sede
            </button>
          </div>
          <div className="store__card">
            <ul>
              <li><IconPin width="22" height="22" /><div><small>{actual.nombre}</small><b>{actual.direccion}</b></div></li>
              <li><IconClock width="22" height="22" /><div><small>Horario</small>{dealer.hours?.map((h) => <span key={h.day}><em>{h.day}</em> {h.time}</span>)}</div></li>
              {actual.asesores?.map((a, k) => (
                <li key={a.whatsapp}><IconPhone width="22" height="22" /><div><small>Asesor {k + 1}</small><a href={waAsesor(a.whatsapp, `Hola ${actual.nombre}, quiero información sobre una moto.`)} target="_blank" rel="noreferrer">{a.telefono} · WhatsApp</a></div></li>
              ))}
              {actual.tallerRepuestos && (
                <li><IconWrench width="22" height="22" /><div><small>{actual.tallerRepuestos.nombre}</small><a href={waAsesor(actual.tallerRepuestos.whatsapp, `Hola ${actual.nombre}, quiero agendar servicio.`)} target="_blank" rel="noreferrer">{actual.tallerRepuestos.telefono} · WhatsApp</a></div></li>
              )}
              <li><IconMail width="22" height="22" /><div><small>Correo</small><a href={`mailto:${dealer.email}`}>{dealer.email}</a></div></li>
            </ul>
            <a className="btn btn--red btn--block" href={waLink(`Hola ${actual.nombre}, quiero más info de sus concesionarios.`)} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> WhatsApp {actual.ciudad}</a>
          </div>

          <div className="store__map" style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, padding: 0, background: "transparent", border: 0, height: "auto" }}>
            <div key={actual.id} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", background: "#fff" }}>
              <iframe
                title={actual.direccion}
                src={actual.embed || `https://www.google.com/maps?q=${encodeURIComponent(actual.direccion)}&z=18&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ width: "100%", height: 380, border: 0 }}
              />
              <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ display: "flex", gap: 6, alignItems: "center", fontWeight: 600, fontSize: ".9rem" }}>
                  <IconPin width="16" height="16" /> {actual.nombre} · {actual.direccion}
                </span>
                <a href={actual.mapsLink} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "var(--red)" }}>Cómo llegar →</a>
              </div>
            </div>
          </div>

          <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
            <h3 className="h-display h-display--sm" style={{ color: "var(--navy)" }}>Todas nuestras sedes</h3>
            <p className="muted">¿Andas por otro lado? Estas son todas nuestras sedes.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, marginTop: 12 }}>
              {dealer.oficinas.map((o) => (
                <div key={o.id} style={{ borderRadius: 12, overflow: "hidden", border: o.id === actual.id ? "2px solid var(--red)" : "1px solid #e5e7eb", background: "#fff", padding: "12px 14px" }}>
                  <b style={{ display: "flex", gap: 6, alignItems: "center" }}><IconPin width="15" height="15" /> {o.nombre}</b>
                  <div className="muted" style={{ fontSize: ".85rem", margin: "4px 0 8px" }}>{o.direccion}</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <a href={o.mapsLink} target="_blank" rel="noreferrer" style={{ fontWeight: 700, color: "var(--red)", fontSize: ".85rem" }}>Cómo llegar →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}