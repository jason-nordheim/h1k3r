import React, { useContext } from 'react' 
import { Route, Redirect } from 'react-router-dom'
import { AuthorizationContext } from "../context/Authentication";

export const ProtectedRoute = ({ to, children, ...other }) => {
  const AuthContext = useContext(AuthorizationContext);
  
  if(AuthContext.isLoggedIn) {
    return <Route to={to} {...other}>{children}</Route>
  } else {
    return <Redirect to="/login" /> 
  }
}