/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Header from './Header';

const styles = () => ({
  root: {
    marginTop: -8
  }
});

const OneHourADayApp = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Header />
    </div>
  );
};

export default withStyles(styles)(OneHourADayApp);
