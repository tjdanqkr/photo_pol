import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../components/home/Home';

const ControlRoute: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/modules" component={} /> */}

      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);
export default ControlRoute;
