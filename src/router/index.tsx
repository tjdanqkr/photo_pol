import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/home/Home';

const ControlRoute: React.FC = () => (
  <HashRouter>
    <Route path="/" exact component={Home} />
    {/* <Route path="/modules" component={} /> */}

    <Redirect path="*" to="/" />
  </HashRouter>
);
export default ControlRoute;
