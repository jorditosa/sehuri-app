import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/public-home/Home';
import Manifesto from '../pages/manifesto/Manifesto';

const Routes: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/manifesto">
        <Manifesto />
      </Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
);

export default Routes;
