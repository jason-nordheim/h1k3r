import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { MobileHomeView } from "./views/HomeView";
import { MobileLoginView } from "./views/LoginView";
import { MobileRegisterView } from "./views/RegisterView";
import { MobileAccountView } from "./views/AccountView";
import { MobileExploreView } from "./views/ExploreView";
import { MobileEventsView } from "./views/EventsView";
import { MobileSocialView } from "./views/SocialView";
import { MoreView } from "./views/MoreView";
import { AnimatedSwitch, AnimatedRoute, spring } from "react-router-transition";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthenticationProvider } from "./components/AuthenticationContext";
  const mapStyles = (styles) => {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  };
  const bounce = (val) => {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  };
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

export const App = () => {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
        >
          <Route exact path="/" component={MobileHomeView} />
          <Route path="/home" component={MobileHomeView} />
          <Route path="/login" component={MobileLoginView} />
          <Route path="/register" component={MobileRegisterView} />
          <ProtectedRoute path="/explore" component={MobileExploreView} />
          <ProtectedRoute path="/account" component={MobileAccountView} />
          <ProtectedRoute path="/events" component={MobileEventsView} />
          <ProtectedRoute path="/social" component={MobileSocialView} />
          <ProtectedRoute path="/more" component={MoreView} />
          
        </AnimatedSwitch>
      </AuthenticationProvider>
    </BrowserRouter>
  );
};

export default App;
