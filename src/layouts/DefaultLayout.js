import React from "react";
import { MobileHeader } from "../components/Header";
import { MobileFooter } from "../components/Footer";

export const MobileLayout = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <MobileHeader />
      <main
        style={{
          marginTop: "80px",
          display: "flex",
          justifyContent: "center",
          width: "95vw",
          flexDirection: 'column'
        }}
      >
        {props.children}
      </main>
      <MobileFooter />
    </div>
  );
};
