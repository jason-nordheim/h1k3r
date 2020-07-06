import React, { useContext } from 'react' 
import { Route, Redirect } from 'react-router-dom'
import { AuthenticationContext } from "./AuthenticationContext";

export const ProtectedRoute = ({ to, children, ...other }) => {
  return (
    <AuthenticationContext.Consumer>
      {(value) => {
        const { state, signIn, signOut, register } = value;
        return (
        state.isLoggedIn 
          ? <Route to={to} {...other}>{children}</Route>
          : <Redirect to="/login" /> 
        )
      }}
    </AuthenticationContext.Consumer>
  )  
  
}