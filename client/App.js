import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Home from './scenes/Home';
import PublishProject from './scenes/PublishProject';
import ListResults from './scenes/ListResults';
import styles from './styles';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/publish" component={PublishProject} />
    <Route path="/search" component={ListResults} />
  </Switch>
);

export default withStyles(styles)(App);
