import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import CoronaMap from '../components/skill/CoronaMap';

const ControlRoute: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/skill/1">
      <CoronaMap></CoronaMap>
    </Route>
    <Route path="*">
      <Home />
    </Route>
  </Switch>
);
export default ControlRoute;
