import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/home/Home';

const ControlRoute: React.FC = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Route path="/" exact component={Home} />
    {/* <Route path="/modules" component={} /> */}

    <Redirect path="*" to="/" />
  </BrowserRouter>
);
export default ControlRoute;
