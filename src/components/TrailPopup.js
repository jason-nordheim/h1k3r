import React from 'react'
import { greenIcon, yellowIcon, redIcon, greyIcon } from "../CustomIcons";
import Rating from "@material-ui/lab/Rating";
import { Marker, Popup } from "react-leaflet";

export const TrailPopup = ({ trail }) => {
  const icon = trail.conditionStatus === "All Clear" 
    ? greenIcon : trail.conditionStatus === "Minor Issues"
      ? yellowIcon : trail.conditionStatus === "Bad / Closed" 
        ? redIcon : greyIcon

  return (
    <Marker
      key={trail.name}
      position={[trail.latitude, trail.longitude]}
      icon={icon}
    >
      <Popup style={{ textAlign: "left" }}>
        <h1 style={{ fontSize: "14px" }}>{trail.name}</h1>
        <Rating value={trail.stars} precision={0.1} readOnly />
        <span>
          <b>Status:</b>
          <p>{trail.conditionStatus}</p>
        </span>
        <span>
          <b>Summary</b>
          <p>{trail.summary}</p>
        </span>
      </Popup>
    </Marker>
  );
}
