import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../leafletSetup";

const position: [number, number] = [41.7151, 44.8271];

export default function DeliveryAreas() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">DELIVERY AREAS</h2>

      {/* SEARCH */}
      <div className="flex items-center bg-gray-100 rounded-full px-6 py-4 mb-6">
        <input
          type="text"
          placeholder="Enter your address"
          className="bg-transparent flex-1 outline-none text-gray-600"
        />
        <svg
          className="w-6 h-6 text-lime-500"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.65" y1="16.65" x2="21" y2="21" />
        </svg>
      </div>

      {/* MAP */}
      <div className="rounded-3xl overflow-hidden">
        <div className="h-[400px] w-full">
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={position} />
          </MapContainer>
        </div>
      </div>
    </section>
  );
}