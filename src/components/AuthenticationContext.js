import React, { createContext } from "react";
import { useLoginState } from "../hooks/useLoginStatus";

export const AuthenticationContext = createContext();

export const AuthenticationProvider = props => {
  const [state, signIn, signOut, register] = useLoginState();

  return (
    <AuthenticationContext.Provider value={{state, signIn, signOut, register}}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
