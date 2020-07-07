import React from "react";
import { MobileLayout } from "../layouts/DefaultLayout";
import { useTrails } from "../hooks/useTrails";
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


