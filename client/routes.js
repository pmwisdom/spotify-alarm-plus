import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '/client/app';
import Home from '/client/views/home';
import Login from '/client/views/login';
import CreateAlarm from '/client/views/create-alarm';
import NotFoundPage from '/client/views/notFoundPage';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="login" component={Login} />
      <Route path="create-alarm" component={CreateAlarm} >
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);