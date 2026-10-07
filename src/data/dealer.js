// ─────────────────────────────────────────────────────────────
// DATOS DEL CONCESIONARIO AKT - SUMOTO S.A. - 2 SEDES
// ─────────────────────────────────────────────────────────────

let digitalIndex = 0;

function getSiguienteDigital() {
  const lista = dealer.whatsappDigitales;
  const numero = lista[digitalIndex % lista.length];
  digitalIndex = (digitalIndex + 1) % lista.length;
  return numero;
}

export const dealer = {
  businessName: "Sumoto S.A.",
  displayName: "AKT Valle",
  city: "el Valle del Cauca",
  email: "jefecomercialakt@sumoto.com.co",
  phone: "+57 310 2889425",
  nationalLine: "01 8000 524 066",
  hours: [
    { day: "Lunes a viernes", time: "8:30 a.m. – 6:00 p.m." },
    { day: "Sábados", time: "8:00 a.m. – 2:00 p.m." },
  ],
  socials: {
    facebook: "https://www.facebook.com/MotosAKT/?locale=es_LA",
    instagram: "https://www.instagram.com/sumoto_s.a/",
    tiktok: "https://www.tiktok.com/@akt_valle?_r=1&_t=ZS-9A0AzEHEkgH"
  },

  whatsappDigitales: ["573102889425"],
  whatsappRepuestos: "573208500909",
  whatsappTaller: "573233089863",

  oficinas: [
    {
      id: "principal",
      nombre: "Sede Principal - Ventas y Administración",
      direccion: "CRA. 33A # 30-142, Palmira, Valle del Cauca",
      mapsQuery: "CRA. 33A # 30-142, Palmira",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=CRA.+33A+%2330-114,+Palmira",
      embed: "https://www.google.com/maps?q=CRA.+33A+%2330-114,+Palmira,+Valle+del+Cauca&z=18&output=embed",
    },
    {
      id: "segunda",
      nombre: "Sede 2 - Vitrina y Entregas Palmira",
      direccion: "CRA. 33A # 30-114, Palmira, Valle del Cauca",
      mapsQuery: "CRA. 33A # 30-114, Palmira",
      mapsLink: "https://www.google.com/maps/search/?api=1&query=CRA.+33A+%2330-142,+Palmira",
      embed: "https://www.google.com/maps?q=CRA.+33A+%2330-142,+Palmira,+Valle+del+Cauca&z=18&output=embed",
    }
  ],

  get address() {
    return this.oficinas[0].direccion;
  },
  get addressMapsQuery() {
    return this.oficinas[0].mapsQuery;
  }
};

export function waLink(message) {
  const numero = getSiguienteDigital();
  return `https://wa.me/${numero}?text=${encodeURIComponent(message || "Hola AKT Valle, quiero información sobre una moto.")}`;
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
  return `https://wa.me/${dealer.whatsappTaller}?text=${encodeURIComponent(message || "Hola, quiero agendar servicio en el taller AKT Valle.")}`;
}

export function openWaTaller(message) {
  window.open(waTaller(message), "_blank", "noopener");
}