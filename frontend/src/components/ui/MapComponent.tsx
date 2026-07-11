import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { SITE_COORDINATES, SITE_NAME, SITE_ADDRESS } from "../../constants/siteInfo";

// Fix Leaflet default marker icon
const defaultIcon = new Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapComponentProps {
  height?: string;
  zoom?: number;
  className?: string;
}

export default function MapComponent({
  height = "400px",
  zoom = 15,
  className = "",
}: MapComponentProps) {
  return (
    <div className={`overflow-hidden rounded-2xl ${className}`} style={{ height }}>
      <MapContainer
        center={[SITE_COORDINATES.lat, SITE_COORDINATES.lng]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[SITE_COORDINATES.lat, SITE_COORDINATES.lng]}
          icon={defaultIcon}
        >
          <Popup>
            <div className="text-center">
              <strong>{SITE_NAME}</strong>
              <br />
              <span className="text-xs">{SITE_ADDRESS}</span>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
