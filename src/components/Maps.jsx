import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "../hooks";

const Maps = () => {
  const { position } = useMap();

  return (
    <div>
      <MapContainer
        center={position}
        zoom={12.5}
        scrollWheelZoom={true}
        style={{ minHeight: "90vh", minWidth: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Her er din plassering!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Maps;
