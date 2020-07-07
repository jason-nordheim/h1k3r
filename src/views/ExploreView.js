import React, { createRef } from "react";
import { MobileLayout } from "../layouts/DefaultLayout";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useTrails } from "../hooks/useTrails";
import { greenIcon } from "../CustomIcons";

export const MobileExploreView = (props) => {
  const [position, error, trails, switchPosition] = useTrails();
  const initialPosition = [
    parseFloat(position.latitude),
    parseFloat(position.longitude),
  ];

  return (
    <MobileLayout>
      <Map
        style={{ width: "98%", height: "95%", overflow: "hidden", zIndex: 0 }}
        center={initialPosition}
        zoom={10}
      >
        {position !== null ? (
          <Marker position={[position.latitude, position.longitude]}>
            <Popup>Current Location</Popup>
          </Marker>
        ) : null}
        {trails !== null ? trails.map((t) => createTrailPopup(t)) : null}

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          maxZoom={18}
        />
      </Map>
    </MobileLayout>
  );
};



const createTrailPopup = (trail) => {
  return (
    <Marker
      key={trail.id}
      position={[trail.latitude, trail.longitude]}
      icon={greenIcon}
    >
      <Popup>{trail.name}</Popup>
    </Marker>
  );
};