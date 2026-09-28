import { dealer, waLink } from "../data/dealer.js";
import { getMoto, img } from "../utils/catalogo.js";
import PageHeader from "../components/PageHeader.jsx";
import { IconPin, IconClock, IconPhone, IconMail, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield } from "../components/Icons.jsx";

export default function Concesionario() {
  return (
    <>
      <PageHeader eyebrow={dealer.businessName} title="El concesionario" crumbs={[{ label: "Concesionario" }]} image={img(getMoto("ds900x"))}>
        <p>{dealer.businessName} es concesionario oficial AKT Motos. Ven a conocer, probar y cotizar tu próxima moto con asesoría experta.</p>
      </PageHeader>
      
      <section className="sec sec--tight">
        <div className="container store">
          <div className="store__about">
            <span className="eyebrow">Visítanos en Palmira</span>
            <h2 className="h-display">Tu punto AKT en el Valle del Cauca</h2>
            <p className="muted">Te acompañamos a elegir, financiar y mantener tu moto: venta de motos nuevas, crédito, taller especializado y repuestos originales en un mismo lugar.</p>
            <div className="store__services">
              {[[IconShield, "Motos nuevas AKT"], [IconCard, "Financiación"], [IconWrench, "Taller especializado"], [IconBox, "Repuestos y accesorios"]].map(([I, t]) => (
                <div key={t}><I /><span>{t}</span></div>
              ))}
            </div>
          </div>

          <div className="store__card">
            <ul>
              <li><IconPin width="22" height="22" /><div><small>Sedes</small><b>CRA. 33A # 30-114</b><b style={{marginTop: 4}}>CRA. 33A # 30-142</b><span className="muted" style={{fontSize: '.85rem'}}>Palmira, Valle</span></div></li>
              <li><IconClock width="22" height="22" /><div><small>Horario de atención</small>{dealer.hours.map((h) => <span key={h.day}><em>{h.day}</em> {h.time}</span>)}</div></li>
              <li><IconPhone width="22" height="22" /><div><small>Línea de ventas</small><a href={`tel:${dealer.phone.replace(/\s+/g, "")}`}>{dealer.phone}</a></div></li>
              <li><IconMail width="22" height="22" /><div><small>Correo</small><a href={`mailto:${dealer.email}`}>{dealer.email}</a></div></li>
            </ul>
            <a className="btn btn--red btn--block" href={waLink("Hola, quiero más información sobre el concesionario en Palmira.")} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> Escríbenos por WhatsApp</a>
          </div>

          {/* MAPAS CON LAS 2 GOTAS EXACTAS */}
          <div className="store__map" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: 0, background: "transparent", border: 0 }}>
            {dealer.oficinas.map(ofi => (
              <div key={ofi.id} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", background: "#fff" }}>
                <iframe 
                  title={ofi.nombre}
                  src={ofi.embed} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: "100%", height: 280, border: 0, display: "block" }}
                />
                <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "center", fontSize: ".9rem", fontWeight: 600 }}>
                    <IconPin width="18" height="18" /> {ofi.direccion}
                  </div>
                  <a href={ofi.mapsLink} target="_blank" rel="noreferrer" style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--red)" }}>Cómo llegar →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}