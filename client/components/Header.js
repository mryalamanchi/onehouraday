/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import handShake from '../images/hand_shake.svg';
import wallClock from '../images/wall_clock.svg';
import group from '../images/group.svg';
import homeBanner from '../images/gum_homebanner.jpg';

const styles = theme => ({
  root: {
    marginTop: -8
  },
  headerArea: {
    width: 1280,
    margin: '0 auto',
    padding: '20px 0',
    background: `url(${homeBanner}) no-repeat center`
  },
  title: {
    fontFamily: 'Barrio',
    fontSize: 48,
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'center',
    color: '#ffffff'
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'left',
    color: '#ffffff'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    width: '80%', // temporary box waiting for search box
    visibility: 'hidden' // temporary box waiting for search box
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  valueImageBox: {
    width: '108px',
    height: '108px',
    backgroundColor: '#d8d8d8',
    border: 'solid 1px #979797'
  },
  valueImage: {
    height: '70%'
  },
  valueTextBox: {
    width: 160,
    marginLeft: 29,
    marginRight: 10
  },
  valueText: {
    fontSize: 20,
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'left',
    color: '#ffffff'
  }
});

const Header = (props) => {
  const { classes } = props;
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="stretch"
      spacing={40}
      className={classes.headerArea}
    >

      <Grid xs={12} item className={classes.row}>
        <Typography variant="title" className={classes.title} gutterBottom>
          One hour a Day
        </Typography>
      </Grid>

      <Grid xs={12} item className={classes.row}>
        <Typography variant="subheading" className={classes.subtitle} gutterBottom>
          Spend 1 hour and help a social cause
        </Typography>
      </Grid>

      <Grid xs={12} item className={classes.row}>
        <Paper className={classes.paper}>search box</Paper>
      </Grid>


      <Grid item xs={12}>
        <Grid container justify="center">

          <Grid xs={4} item className={classes.row}>
            <Avatar className={classes.valueImageBox}>
              <img src={handShake} className={classes.valueImage} alt="handShake" />
            </Avatar>
            <div className={classes.valueTextBox}>
              <Typography className={classes.valueText}>
                Be a hero. Help an organisation and improve your skills
              </Typography>
            </div>
          </Grid>

          <Grid xs={4} item className={classes.row}>
            <Avatar className={classes.valueImageBox}>
              <img src={wallClock} className={classes.valueImage} alt="wallClock" />
            </Avatar>
            <div className={classes.valueTextBox}>
              <Typography className={classes.valueText}>
                All you need to dedicate is an hour
              </Typography>
            </div>
          </Grid>

          <Grid xs={4} item className={classes.row}>
            <Avatar className={classes.valueImageBox}>
              <img src={group} className={classes.valueImage} alt="group" />
            </Avatar>
            <div className={classes.valueTextBox}>
              <Typography className={classes.valueText}>
                A little collaboration from each of us can generate a huge impact
              </Typography>
            </div>
          </Grid>

        </Grid>
      </Grid>

    </Grid>
  );
};

export default withStyles(styles)(Header);

