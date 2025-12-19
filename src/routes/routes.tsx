import React, { useEffect, useState } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../pages/public-home/Home';
import Manifesto from '../pages/manifesto/Manifesto';
import UrlScanner from '../pages/tools/UrlScanner';
import OnBoarding from '../pages/onboarding/OnBoarding';
import { checkStorageValue } from '../lib/preferences/storage-lib';

const Routes: React.FC = () => {
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(null);


  useEffect(() => {
    const loadSeenStatus = async () => {
      const seen = await checkStorageValue('hasSeenOnboarding');

      // convert string → boolean if needed
      setHasSeenOnboarding(seen === 'true');
    };

    loadSeenStatus();
  }, []);


  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/onboarding">
          <OnBoarding />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/manifesto">
          <Manifesto />
        </Route>
        <Route exact path="/tools/url-scanner">
          <UrlScanner />
        </Route>
        <Route exact path="/">
          {hasSeenOnboarding ? (
            <Redirect to="/home" />
          ) : (
            <Redirect to="/onboarding" />
          )}
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Routes;