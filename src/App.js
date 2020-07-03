import React, { useReducer, useEffect } from 'react' 
import { BrowserRouter, Route } from "react-router-dom";
import { MobileHomeView } from "./views/HomeView";
import { MobileLoginView } from "./views/LoginView";
import { MobileSignUpView } from "./views/SignUpView";
import { MobileAccountView } from "./views/AccountView";
import { MobileMapView } from "./views/MapView";
import { MobileEventsView } from "./views/EventsView";
import { MobileSocialView } from "./views/SocialView";
import { MoreView } from "./views/MoreView";
import { AnimatedSwitch } from "react-router-transition";
import {
  AuthorizationContext,
  AuthenticationReducer,
  Reset,
} from "./context/Authentication";
import { ProtectedRoute } from './components/ProtectedRoute';


export const App = () => {
  const [authState, authDispatch] = useReducer(AuthenticationReducer);

  useEffect(() => {
    const rawData = localStorage.getItem("authorization");
    rawData === undefined && authDispatch(Reset(JSON.parse(rawData)));
  }, []);

  useEffect(() => {
    localStorage.setItem("authorization", JSON.stringify(authState));
  }, [authState]);

  return (
    <AuthorizationContext.Provider value={authDispatch}>
      <BrowserRouter>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          <Route exact path="/">
            <MobileHomeView />
          </Route>
          <Route path="/login">
            <MobileLoginView />
          </Route>
          <Route path="/signup">
            <MobileSignUpView />
          </Route>
          <ProtectedRoute path="/map">
            <MobileMapView />
          </ProtectedRoute>
          <ProtectedRoute path="/account">
            <MobileAccountView />
          </ProtectedRoute>
          <ProtectedRoute path="/events">
            <MobileEventsView />
          </ProtectedRoute>
          <ProtectedRoute path="/social">
            <MobileSocialView />
          </ProtectedRoute>
          <ProtectedRoute path="/more">
            <MoreView />
          </ProtectedRoute>
        </AnimatedSwitch>
      </BrowserRouter>
    </AuthorizationContext.Provider>
  );
}

const Routes = () => {
  
}

export default App 