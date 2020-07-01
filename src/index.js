import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MobileHomeView } from './views/HomeView'
import { MobileLoginView } from './views/LoginView';
import { MobileSignUpView } from './views/SignUpView';
import { MobileAccountView } from './views/AccountView';
import { MobileMapView } from './views/MapView';
import { MobileEventsView } from './views/EventsView';
import { MobileSocialView } from './views/SocialView';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MobileHomeView /> 
        </Route>
        <Route path="/login">
          <MobileLoginView />
        </Route>
        <Route path="/signup">
          <MobileSignUpView /> 
        </Route>
        <Route path="/map">
          <MobileMapView /> 
        </Route>
        <Route path="/account" >
          <MobileAccountView /> 
        </Route>
        <Route path="/events">
          <MobileEventsView /> 
        </Route>
        <Route path="/social">
          <MobileSocialView /> 
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
