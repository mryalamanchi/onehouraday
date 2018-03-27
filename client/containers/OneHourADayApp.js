/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  Route,
  Link
} from 'react-router-dom';

import HomePage from '../components/HomePage';
import Search from './Search';

const styles = () => ({
  root: {
    marginTop: -8
  }
});

const OneHourADayApp = (props) => {
  // Temporary Navbar for easier clientside testing
  const nav = (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/search">Search</Link></li>
    </ul>
  );
  const { classes } = props;
  return (
    <div className={classes.root}>
      {nav}
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component={Search} />
    </div>
  );
};

export default withStyles(styles)(OneHourADayApp);
