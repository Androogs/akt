import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix para los iconos por defecto de Leaflet en bundlers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const SEDES_MAP = [
  {
    id: "sede-142",
    nombre: "Sede Principal - Ventas y Administración",
    direccion: "CRA. 33A # 30-142, Palmira",
    lat: 3.53615,
    lng: -76.30315,
    link: "https://www.google.com/maps/search/?api=1&query=CRA.+33A+%2330-142,+Palmira,+Valle+del+Cauca"
  },
  {
    id: "sede-114",
    nombre: "Sede 2 - Vitrina y Entregas",
    direccion: "CRA. 33A # 30-114, Palmira",
    lat: 3.53595,
    lng: -76.30345,
    link: "https://www.google.com/maps/search/?api=1&query=CRA.+33A+%2330-114,+Palmira,+Valle+del+Cauca"
  }
];

export default function MapaSedes() {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #e5e7eb", background: "#fff" }}>
      <MapContainer
        center={[3.53605, -76.30330]}
        zoom={18}
        style={{ width: "100%", height: 380 }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {SEDES_MAP.map((sede) => (
          <Marker key={sede.id} position={[sede.lat, sede.lng]}>
            <Popup>
              <b>{sede.nombre}</b>
              <br />
              {sede.direccion}
              <br />
              <a href={sede.link} target="_blank" rel="noreferrer" style={{ color: "#e11d2a", fontWeight: 700 }}>
                Cómo llegar →
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}