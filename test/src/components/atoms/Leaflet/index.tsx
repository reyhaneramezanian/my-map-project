import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { coloredMarker } from "./coloredMarker";

export default function GermanyMap({ locations }) {
  const randomColorFromString = (str) => {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += value.toString(16).padStart(2, "0");
    }

    return color;
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <MapContainer
        center={[51.1657, 10.4515]}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={coloredMarker(randomColorFromString(loc.name))}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <strong>{loc.name}</strong>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
