// ─────────────────────────────────────────────────────────────
// DATOS DEL CONCESIONARIO AKT - SUMOTO S.A. - 7 SEDES + CANAL DIGITAL
// Cada sede incluye: direccion, link de Google Maps, asesores
// (ventas) y responsable de taller y repuestos cuando aplica.
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
      id: "buga",
      nombre: "AKT Buga",
      ciudad: "Buga",
      direccion: "Carrera 8 # 6-71, Guadalajara de Buga, Valle del Cauca",
      mapsQuery: "Cra. 8 # 6-71, Guadalajara de Buga",
      mapsLink: "https://www.google.com/maps/place/Cra.+8+%23+6-71,+Guadalajara+de+Buga,+Valle+del+Cauca/@3.898135,-76.2989709,17z/data=!3m1!4b1!4m6!3m5!1s0x8e39e640e87144f7:0x1b5024b42389dc38!8m2!3d3.898135!4d-76.296396!16s%2Fg%2F11l_5_th43?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+8+%236-71,+Buga,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Buga 1", telefono: "+57 315 3243783", whatsapp: "573153243783" }, { nombre: "Asesor Buga 2", telefono: "+57 310 2885987", whatsapp: "573102885987" }],
      tallerRepuestos: { nombre: "Taller y Repuestos Buga", telefono: "+57 304 5669614", whatsapp: "573045669614" },
    },
    {
      id: "yumbo",
      nombre: "AKT Yumbo",
      ciudad: "Yumbo",
      direccion: "Carrera 4 # 13-24, Br. Puerto Isaac, Yumbo, Valle del Cauca",
      mapsQuery: "Cra. 4 # 13-24, Yumbo",
      mapsLink: "https://www.google.com/maps/place/Cra.+4+%23+13-24,+Br.+Puerto+Isaac,+Yumbo,+Valle+del+Cauca/@3.5826746,-76.4892429,20z/data=!4m6!3m5!1s0x8e30aa47a523d587:0xd1f5a12de4f4767a!8m2!3d3.5826719!4d-76.4887641!16s%2Fg%2F11vlsf5fjy?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+4+%2313-24,+Yumbo,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Yumbo", telefono: "+57 318 6401119", whatsapp: "573186401119" }],
      tallerRepuestos: { nombre: "Taller y Repuestos Yumbo", telefono: "+57 316 8117187", whatsapp: "573168117187" },
    },
    {
      id: "pradera",
      nombre: "AKT Pradera",
      ciudad: "Pradera",
      direccion: "Calle 7 # 8-38, Pradera, Valle del Cauca",
      mapsQuery: "Cl. 7 # 8-38, Pradera",
      mapsLink: "https://www.google.com/maps/place/Cl.+7+%238-38,+Pradera,+Valle+del+Cauca/@3.4180322,-76.2415635,1064a,75y,153.53h,80.82t/data=!3m7!1e1!3m5!1sMkPsp0pJ5cmKFlXTr3evkA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.clients6.google.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D9.182557299813851%26panoid%3DMkPsp0pJ5cmKFlXTr3evkA%26yaw%3D153.5294036254578!7i13312!8i6656!4m13!1m7!3m6!1s0x8e3a11967102ecc9:0x384d605e9513ed8c!2sCl.+7+%238-38,+Pradera,+Valle+del+Cauca!3b1!8m2!3d3.4181169!4d-76.2414322!3m4!1s0x8e3a11967102ecc9:0x384d605e9513ed8c!8m2!3d3.4181169!4d-76.2414322?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Calle+7+%238-38,+Pradera,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Pradera", telefono: "+57 317 3632898", whatsapp: "573173632898" }],
      tallerRepuestos: { nombre: "Taller y Repuestos Pradera", telefono: "+57 317 3632898", whatsapp: "573173632898" },
    },
    {
      id: "candelaria",
      nombre: "AKT Candelaria",
      ciudad: "Candelaria",
      direccion: "Carrera 7 # 9-26, Candelaria, Valle del Cauca",
      mapsQuery: "Cra. 7 # 9-26, Candelaria",
      mapsLink: "https://www.google.com/maps/place/Cra.+7+%23+9-26,+Candelaria,+Valle+del+Cauca/@3.4089455,-76.3469783,20.5z/data=!4m6!3m5!1s0x8e3a0ea47c37658b:0x2b70a6ccdb626d14!8m2!3d3.4088479!4d-76.3467996!16s%2Fg%2F11yjgd3vl6?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+7+%239-26,+Candelaria,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Candelaria", telefono: "+57 317 4409601", whatsapp: "573174409601" }],
      tallerRepuestos: null,
    },
    {
      id: "palmira-1",
      nombre: "AKT Palmira PRINCIPAL",
      ciudad: "Palmira",
      direccion: "Carrera 33A # 30-144, Palmira, Valle del Cauca",
      mapsQuery: "Carrera 33A # 30-144, Palmira",
      mapsLink: "https://www.google.com/maps/place/AKT+motos+concesonaria+y+Taller/@3.5288919,-76.3042684,20z/data=!4m14!1m7!3m6!1s0x8e3a04e560527db1:0xfe5adb026f180a45!2sYamaha+Palmira+Distrimotos!8m2!3d3.5288495!4d-76.3042099!16s%2Fg%2F11b7q82lbt!3m5!1s0x8e3a05003bbc8923:0xff8d3b83fbdf333e!8m2!3d3.528645!4d-76.3042213!16s%2Fg%2F11z95g_f2g?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+33A+%2330-144,+Palmira,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Palmira S1 - 1", telefono: "+57 316 4243935", whatsapp: "573164243935" }, { nombre: "Asesor Palmira S1 - 2", telefono: "+57 318 8276725", whatsapp: "573188276725" }],
      tallerRepuestos: null,
    },
    {
      id: "palmira-2",
      nombre: "AKT Palmira CENTRO",
      ciudad: "Palmira",
      direccion: "Carrera 28 # 28-05, Palmira, Valle del Cauca",
      mapsQuery: "Carrera 28 # 28-05, Palmira",
      mapsLink: "https://www.google.com/maps/place/TVS+MOTOS/@3.5252872,-76.2992755,15z/data=!4m15!1m8!3m7!1s0x8e3a04e697095f31:0xac9a4a3605c242a0!2sTVS+MOTOS!8m2!3d3.5252333!4d-76.2992849!10e5!16s%2Fg%2F11c1vl6kbg!3m5!1s0x8e3a04e697095f31:0xac9a4a3605c242a0!8m2!3d3.5252333!4d-76.2992849!16s%2Fg%2F11c1vl6kbg?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+28+%2328-05,+Palmira,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Palmira S2 - 1", telefono: "+57 313 3422751", whatsapp: "573133422751" }, { nombre: "Asesor Palmira S2 - 2", telefono: "+57 317 4233947", whatsapp: "573174233947" }],
      tallerRepuestos: null,
    },
    {
      id: "cali-66",
      nombre: "AKT Cali - La 66",
      ciudad: "Cali",
      direccion: "Carrera 66 # 10A-40, Comuna 17, Cali, Valle del Cauca",
      mapsQuery: "Cra. 66 # 10A-40, Cali",
      mapsLink: "https://www.google.com/maps/place/Cra.+66+%2310A-40,+Comuna+17,+Cali,+Valle+del+Cauca/@3.3979765,-76.5410683,21z/data=!4m6!3m5!1s0x8e30a1510e27417f:0x1df0dfc277d65ec3!8m2!3d3.3978694!4d-76.5408394!16s%2Fg%2F11kbyff86y?entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D",
      embed: "https://www.google.com/maps?q=Carrera+66+%2310A-40,+Cali,+Valle+del+Cauca&z=18&output=embed",
      asesores: [{ nombre: "Asesor Cali 66 - 1", telefono: "+57 316 7446434", whatsapp: "573167446434" }, { nombre: "Asesor Cali 66 - 2", telefono: "+57 316 4462956", whatsapp: "573164462956" }],
      tallerRepuestos: { nombre: "Taller y Repuestos La 66 Cali", telefono: "+57 317 2699105", whatsapp: "573172699105" },
    },
  ],

  get address() {
    return (this.oficinas.find((o) => o.id === "palmira-1") || this.oficinas[0]).direccion;
  },
  get addressMapsQuery() {
    return (this.oficinas.find((o) => o.id === "palmira-1") || this.oficinas[0]).mapsQuery;
  }
};

export function getSedeById(id) {
  return dealer.oficinas.find((o) => o.id === id);
}

export function waAsesor(whatsapp, message) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message || "Hola, quiero información sobre una moto.")}`;
}

export function waTallerSede(whatsapp, message) {
  const numero = whatsapp || dealer.whatsappTaller;
  return `https://wa.me/${numero}?text=${encodeURIComponent(message || "Hola, quiero agendar servicio en el taller AKT.")}`;
}

function sedeGuardada() {
  try {
    if (typeof window === "undefined") return null;
    const id = window.localStorage.getItem("akt_sede_id");
    if (!id) return null;
    return dealer.oficinas.find((o) => o.id === id) || null;
  } catch {
    return null;
  }
}

export function waLink(message) {
  const sede = sedeGuardada();
  const numero = sede?.asesores?.[0]?.whatsapp || getSiguienteDigital();
  const pref = sede ? `[${sede.nombre}] ` : "";
  return `https://wa.me/${numero}?text=${encodeURIComponent(pref + (message || "Hola AKT Valle, quiero información sobre una moto."))}`;
}

export function openWaDigitales(message) {
  window.open(waLink(message), "_blank", "noopener");
}

export function waRepuestos(message) {
  const sede = sedeGuardada();
  const numero = sede?.tallerRepuestos?.whatsapp || dealer.whatsappRepuestos;
  const pref = sede ? `[${sede.nombre}] ` : "";
  return `https://wa.me/${numero}?text=${encodeURIComponent(pref + (message || "Hola, necesito cotizar repuestos AKT."))}`;
}

export function openWaRepuestos(message) {
  window.open(waRepuestos(message), "_blank", "noopener");
}

export function waTaller(message) {
  const sede = sedeGuardada();
  const numero = sede?.tallerRepuestos?.whatsapp || dealer.whatsappTaller;
  const nombre = sede?.nombre || "AKT Valle";
  return `https://wa.me/${numero}?text=${encodeURIComponent(`[${nombre}] ` + (message || "Hola, quiero agendar servicio en el taller AKT."))}`;
}

export function openWaTaller(message) {
  window.open(waTaller(message), "_blank", "noopener");
}