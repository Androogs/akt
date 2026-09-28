// ─────────────────────────────────────────────────────────────
// DATOS DEL CONCESIONARIO AKT - SUMOTO S.A. - 2 SEDES
// ─────────────────────────────────────────────────────────────
export const dealer = {
  businessName: "Sumoto S.A.",
  displayName: "AKT Palmira",
  city: "Palmira, Valle del Cauca",
  email: "jefecomercialakt@sumoto.com.co",
  phone: "+57 310 2889425",
  nationalLine: "01 8000 524 066",
  hours: [
    { day: "Lunes a viernes", time: "8:30 a.m. – 6:00 p.m." },
    { day: "Sábados", time: "8:00 a.m. – 2:00 p.m." },
  ],
  socials: { facebook: "https://www.facebook.com/MotosAKT/?locale=es_LA", instagram: "https://www.instagram.com/sumoto_s.a/", tiktok: "https://www.tiktok.com/@akt_valle?_r=1&_t=ZS-9A0AzEHEkgH" },

  // NÚMEROS POR ÁREA
  whatsappDigitales: ["573102889425"],
  whatsappRepuestos: "573208500909",
  whatsappTaller: "573233089863",

  // DOS OFICINAS
  oficinas: [
    {
      id: "principal",
      nombre: "Sede Principal - Ventas y Administración",
      direccion: "CRA. 33A # 30-114, Palmira, Valle del Cauca",
      mapsQuery: "CRA 33A # 30-114 Palmira",
      mapsLink: "https://maps.app.goo.gl/6zYhXqXzYhXqXzYhX",
      embed: `https://www.google.com/maps?q=${encodeURIComponent("CRA 33A # 30-114 Palmira")}&z=18&output=embed`,
    },
    {
      id: "segunda",
      nombre: "Sede 2 - Vitrina y Entregas",
      direccion: "CRA. 33A # 30-142, Palmira, Valle del Cauca",
      mapsQuery: "CRA 33A # 30-142 Palmira",
      mapsLink: "https://maps.app.goo.gl/UvsRsESDJ5V339e6A",
      embed: `https://www.google.com/maps?q=${encodeURIComponent("CRA 33A # 30-142 Palmira")}&z=18&output=embed`,
    }
  ],

  // compatibilidad con código viejo
  get address() { return this.oficinas[0].direccion },
};

export function waLink(message) {
  const numero = getSiguienteDigital();
  return `https://wa.me/${numero}?text=${encodeURIComponent(message || "Hola AKT Palmira, quiero información sobre una moto.")}`;
}
export function openWaDigitales(message) {
  window.open(waLink(message), "_blank", "noopener");
}
export function waRepuestos(message) {
  return `https://wa.me/${dealer.whatsappRepuestos}?text=${encodeURIComponent(message || "Hola, necesito cotizar repuestos AKT.")}`;
}
export function openWaRepuestos(message) {
  window.open(waRepuestos(message), "_blank", "noopener");
}
export function waTaller(message) {
  return `https://wa.me/${dealer.whatsappTaller}?text=${encodeURIComponent(message || "Hola, quiero agendar servicio en el taller AKT Palmira.")}`;
}
export function openWaTaller(message) {
  window.open(waTaller(message), "_blank", "noopener");
}