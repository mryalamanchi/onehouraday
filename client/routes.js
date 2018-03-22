
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import OneHourADayApp from './components/OneHourADayApp';
import Search from './containers/Search';

const RouterConfig = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>

      <Route exact path="/" component={OneHourADayApp} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
);

export default RouterConfig;
