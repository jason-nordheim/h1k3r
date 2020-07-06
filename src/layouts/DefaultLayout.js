import React from "react";
import { MobileHeader } from "../components/Header";
import { MobileFooter } from "../components/Footer";

export const MobileLayout = (props) => {
  return (
    <div style={{display: 'flex', height: '100vh'}}>
      <MobileHeader />
      <main
        style={{
          marginTop: "80px",
          display: "flex",
          width: "95vw",
          flex: 1, 
          flexDirection: 'column'
        }}
      >
        {props.children}
      </main>
      <MobileFooter style={{zIndex: 100}} />
    </div>
  );
};
