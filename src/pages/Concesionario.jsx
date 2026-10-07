import { dealer, waLink } from "../data/dealer.js";
import { getMoto, img } from "../utils/catalogo.js";
import PageHeader from "../components/PageHeader.jsx";
import { IconPin, IconClock, IconPhone, IconMail, IconWhatsapp, IconCard, IconWrench, IconBox, IconShield } from "../components/Icons.jsx";

const SEDES = [
  {
    id: "sede-114",
    direccion: "CRA. 33A # 30-114, Palmira",
    embed: "https://www.google.com/maps?q=CRA.+33A+%2330-114,+Palmira,+Valle+del+Cauca&z=17&output=embed",
    link: "https://www.google.com/maps/search/?api=1&query=CRA.+33A+%2330-114,+Palmira,+Valle+del+Cauca"
  },
  {
    id: "sede-142",
    direccion: "CRA. 33A # 30-142, Palmira",
    embed: "https://www.google.com/maps?q=CRA.+33A+%2330-142,+Palmira,+Valle+del+Cauca&z=17&output=embed",
    link: "https://www.google.com/maps/place/TVS+MOTOS/@3.5253541,-76.2994198,1009a,75y,257.06h,76.91t/data=!3m7!1e1!3m5!1sL1ql58I5vCYCOOjPG1Oj_w!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D13.092867737619372%26panoid%3DL1ql58I5vCYCOOjPG1Oj_w%26yaw%3D257.06032001883773!7i13312!8i6656!4m10!1m2!2m1!1sakt+motos!3m6!1s0x8e3a04e697095f31:0xac9a4a3605c242a0!8m2!3d3.5252333!4d-76.2992849!15sCglha3QgbW90b3MiA4gBAVoLIglha3QgbW90b3OSARBob21lX2dvb2RzX3N0b3Jl4AEA!16s%2Fg%2F11c1vl6kbg?entry=ttu&g_ep=EgoyMDI2MDkzMC4wIKXMDSoASAFQAw%3D%3D"
  }
];

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
            <p className="muted">Venta de motos nuevas, crédito, taller y repuestos originales.</p>
            <div className="store__services">
              {[[IconShield, "Motos nuevas AKT"], [IconCard, "Financiación"], [IconWrench, "Taller especializado"], [IconBox, "Repuestos y accesorios"]].map(([I, t]) => (
                <div key={t}><I /><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div className="store__card">
            <ul>
              <li><IconPin width="22" height="22" /><div><small>Sedes</small><b>CRA. 33A # 30-114 </b><b style={{marginTop: 4}}>/ CRA. 33A # 30-142</b></div></li>
              <li><IconClock width="22" height="22" /><div><small>Horario</small>{dealer.hours?.map((h) => <span key={h.day}><em>{h.day}</em> {h.time}</span>)}</div></li>
              <li><IconPhone width="22" height="22" /><div><small>Ventas</small><a href={`tel:${dealer.phone.replace(/\s+/g, "")}`}>{dealer.phone}</a></div></li>
            </ul>
            <a className="btn btn--red btn--block" href={waLink("Hola, quiero más info de sus concesionarios.")} target="_blank" rel="noreferrer"><IconWhatsapp width="18" height="18" /> WhatsApp</a>
          </div>

<div className="store__map" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, padding: 0, background: "transparent", border: 0 }}>
  {dealer.oficinas.map(ofi => (
    <div key={ofi.id} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", background: "#fff" }}>
      <iframe 
        title={ofi.direccion} 
        src={ofi.embed || `https://www.google.com/maps?q=${encodeURIComponent(ofi.direccion)}&z=18&output=embed`} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade" 
        style={{ width: "100%", height: 280, border: 0 }} 
      />
      <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{display:"flex", gap:6, alignItems:"center", fontWeight:600, fontSize:".9rem"}}>
          <IconPin width="16" height="16"/> {ofi.direccion}
        </span>
        <a href={ofi.mapsLink} target="_blank" rel="noreferrer" style={{fontWeight:700, color:"var(--red)"}}>Cómo llegar →</a>
      </div>
    </div>
  ))}
</div>
        </div>
      </section>
    </>
  );
}