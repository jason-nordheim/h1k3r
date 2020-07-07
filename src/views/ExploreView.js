import React, { createRef } from "react";
import { MobileLayout } from "../layouts/DefaultLayout";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { useTrails } from "../hooks/useTrails";
import { TrailPopup } from '../components/TrailPopup';
import { MobileMap } from '../components/Map';


export const MobileExploreView = (props) => {
  const [position, error, trails, switchPosition] = useTrails();
  const initialPosition = [
    parseFloat(position.latitude),
    parseFloat(position.longitude),
  ];

  const mapProps = { position, error, trails, switchPosition, initialPosition }

  return (
    <MobileLayout>
      <MobileMap {...mapProps}/> 
    </MobileLayout>
  );
};


