import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import CoronaMap from '../components/skill/CoronaMap';
import LottoQrNumber from '../components/skill/LottoQrNumber';

const ControlRoute: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/skill/1">
      <CoronaMap></CoronaMap>
    </Route>
    <Route path="/skill/2">
      <LottoQrNumber></LottoQrNumber>
    </Route>
    <Route path="*">
      <Home />
    </Route>
  </Switch>
);
export default ControlRoute;
