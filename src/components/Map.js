import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { TrailPopup } from "../components/TrailPopup";

export const MobileMap = ({ position, error, trails, switchPosition, initialPosition }) => {
  return (
    <Map
      style={{
        marginTop: '10%', 
        width: "98%",
        height: "85%",
        overflow: "hidden",
        zIndex: 0,
      }}
      center={initialPosition}
      zoom={10}
    >
      {position !== null ? (
        <Marker position={[position.latitude, position.longitude]}>
          <Popup>Current Location</Popup>
        </Marker>
      ) : null}
      {trails !== null ? trails.map((t) => <TrailPopup trail={t} />) : null}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        maxZoom={18}
      />
    </Map>
  );
};
