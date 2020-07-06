import React from 'react' 
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
import { ProtectedRoute } from './components/ProtectedRoute';
import { AuthenticationProvider } from './components/AuthenticationContext'


export const App = () => {


  return (
      <BrowserRouter>
        <AuthenticationProvider>
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
        </AuthenticationProvider>
      </BrowserRouter>
  );
}

export default App 