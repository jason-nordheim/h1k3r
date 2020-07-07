import React from "react";
import { MobileNavigationBar } from "../navigation/NavigationBar";
import { AuthenticationContext } from "../AuthenticationContext";

export const MobileFooter = (props) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => {
        const { state, /* signIn, signOut, register */  } = value;
        if (state.isLoggedIn) return <MobileNavigationBar />;
        else return null;
      }}
    </AuthenticationContext.Consumer>
  );
};
