import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/Home';
import { Gallery } from '../screens/Gallery';

export const MainNavigator = () => (
  <Switch>
    <Route path="/gallery">
      <Gallery />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
);
