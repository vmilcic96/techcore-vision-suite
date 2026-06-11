import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapInner() {
  const pos: [number, number] = [44.8167, 20.4583]; // Knez Mihailova 12, Beograd
  return (
    <MapContainer center={pos} zoom={16} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: "1rem" }}>
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={pos} icon={icon}>
        <Popup>TechCore Solutions<br/>Knez Mihailova 12, Beograd</Popup>
      </Marker>
    </MapContainer>
  );
}
