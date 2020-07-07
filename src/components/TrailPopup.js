import React from 'react'
import { greenIcon } from "../CustomIcons";
import Rating from "@material-ui/lab/Rating";
import { Marker, Popup } from "react-leaflet";

export const TrailPopup = ({ trail }) => {
  return (
    <Marker
      key={trail.name}
      position={[trail.latitude, trail.longitude]}
      icon={greenIcon}
    >
      <Popup style={{ textAlign: 'left'}}>
        <h1 style={{fontSize: '14px'}}>{trail.name}</h1>
        <Rating value={trail.stars} precision={0.1} />
        <p>{trail.summary}</p>
      </Popup>
    </Marker>
  );
}