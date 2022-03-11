import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import SelfIntroduce from '../components/self-introduce/Self-Introduce';
import CoronaMap from '../components/skill/Corona/CoronaMap';
import LottoQrNumber from '../components/skill/Lotto/LottoTemplate';

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
    <Route path="/selfintroduce">
      <SelfIntroduce />
    </Route>
    <Route path="*">
      <Home />
    </Route>
  </Switch>
);
export default ControlRoute;
