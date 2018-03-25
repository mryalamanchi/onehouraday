/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import HeaderBar from './HeaderBar';

const styles = {
  root: {
    flexGrow: 1
  }
};

function PublishProject(props) {
  const { classes } = props;
  const param = {
    title: 'One hour a Day',
    action: 'Publish a new social project',
    link: '/',
    icon: 'arrow_back'
  };
  return (
    <div className={classes.root}>
      <HeaderBar param={param} />
      <h3>PublishProject form here... </h3>
    </div>
  );
}

export default withStyles(styles)(PublishProject);
