import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import styles from './styles';

// configurable headerbar
function HeaderBar(props) {
  const { classes } = props;
  const { param } = props;
  return (
    <AppBar position="static">
      <Toolbar className={classes.headerBar}>
        <Link to={param.link} className={classes.backButton}>
          <Icon>{param.icon}</Icon>
        </Link>
        <Typography variant="title" className={classes.action}>
          {param.action}
        </Typography>
        <Typography variant="title" className={classes.title}>
          {param.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

HeaderBar.propTypes = {
  /* eslint react/forbid-prop-types: 0 */
  classes: PropTypes.object.isRequired,
  param: PropTypes.object.isRequired
};
export default withStyles(styles)(HeaderBar);
