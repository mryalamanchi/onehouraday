/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styles = {
  headerBar: {
    backgroundColor: '#4a90e2'
  },
  backButton: {
    marginRight: 20,
    color: '#ffffff'
  },
  action: {
    flex: 1,
    fontSize: 20,
    letterSpacing: 1.4,
    textTransform: 'uppercase',
    textAlign: 'left',
    color: '#ffffff'
  },
  title: {
    fontFamily: 'Barrio',
    fontSize: 36,
    letterSpacing: 2.6,
    color: '#ffffff'
  }
};

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

/* PublishProject.propTypes = {
  classes: PropTypes.object.isRequired
}; */
export default withStyles(styles)(HeaderBar);
