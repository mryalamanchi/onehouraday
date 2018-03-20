/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import handShake from '../images/hand_shake.svg';
import wallClock from '../images/wall_clock.svg';
import group from '../images/group.svg';
import homeBanner from '../images/gum_homebanner.jpg';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${homeBanner})`
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  title: {
    fontFamily: 'Barrio',
    fontSize: 48,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'center',
    color: '#ffffff'
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'left',
    color: '#ffffff'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  valueBackground: {
    width: '108px',
    height: '108px',
    backgroundColor: '#d8d8d8',
    border: 'solid 1px #979797'
  },
  valueImage: {
    height: '70%'
  },
  valueText: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 3.4,
    textAlign: 'left',
    color: '#ffffff',
    marginLeft: 20
  }
});

const OneHourADayApp = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        spacing={40}
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


        <Grid item xs={12}>
          <Grid container justify="space-around">

            <Grid xs={3} item className={classes.row}>
              <Avatar className={classes.valueBackground}>
                <img src={handShake} className={classes.valueImage} alt="handShake" />
              </Avatar>
              <Typography variant="subheading" className={classes.valueText} gutterBottom>
                Be a hero. Help an organisation and improve your skills
              </Typography>
            </Grid>

            <Grid xs={3} item className={classes.row}>
              <Avatar className={classes.valueBackground}>
                <img src={wallClock} className={classes.valueImage} alt="wallClock" />
              </Avatar>
              <Typography variant="subheading" className={classes.valueText} gutterBottom>
                All you need to dedicate is an hour
              </Typography>
            </Grid>

            <Grid xs={3} item className={classes.row}>
              <Avatar className={classes.valueBackground}>
                <img src={group} className={classes.valueImage} alt="group" />
              </Avatar>
              <Typography variant="subheading" className={classes.valueText} gutterBottom>
                A little collaboration from each of us can generate a huge impact
              </Typography>
            </Grid>

          </Grid>
        </Grid>

      </Grid>

    </div>
  );
};

export default withStyles(styles)(OneHourADayApp);
