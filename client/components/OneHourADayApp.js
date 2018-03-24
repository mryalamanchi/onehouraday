/* eslint react/prop-types: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Header from './Header';
import PublishProject from './PublishProject';

const styles = () => ({
  root: {
    marginTop: -8
  }
});

const OneHourADayApp = (props) => {
  const { classes } = props;
  return (
    <Router>
      <div className={classes.root}>
        <Route exact path="/" component={Header} />
        <Route exact path="/publish" component={PublishProject} />
      </div>
    </Router >
  );
};

export default withStyles(styles)(OneHourADayApp);
