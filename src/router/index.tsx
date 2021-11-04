import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/home/Home';
import CoronaMap from '../components/skill/CoronaMap';

const ControlRoute: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/skill/1" component={CoronaMap}></Route>
    <Route path="*" component={Home} />
  </Switch>
);
export default ControlRoute;
