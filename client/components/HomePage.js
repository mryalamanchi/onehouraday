/* eslint react/prop-types: 0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';

import handShake from '../images/hand_shake.svg';
import wallClock from '../images/wall_clock.svg';
import group from '../images/group.svg';
import homeBanner from '../images/gum_homebanner.jpg';

// import Search from '../containers/Search';

const styles = () => ({
  headerArea: {
    width: 1280,
    height: 550,
    margin: '0 auto',
    padding: '10px 20px',
    background: `url(${homeBanner}) no-repeat top center`
  },
  topHeader: {
    margin: 0
  },
  titleBox: {
    alignSelf: 'center',
    textAlign: 'left'
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
    textAlign: 'center',
    color: '#ffffff'
  },
  countryBox: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    visibility: 'hidden'
  },
  publishBox: {
    alignSelf: 'flex-start',
    textAlign: 'right'
  },
  publishLink: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 900,
    padding: '10px 50px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: 'rgba(255, 255, 255, 0.87)',
    backgroundColor: '#4a90e2'
  },
  bottomHeader: {
    margin: 0,
    alignItems: 'flex-start'
  },
  valueBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  flex1: {
    flex: 1
  },
  flex2: {
    flex: 2
  }
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePublishProject = () => {
  };

  render() {
    const { classes } = this.props;
    const topHeader = classNames(`${classes.topHeader}`, `${classes.flex1}`);
    const countryBox = classNames(`${classes.countryBpropsox}`);
    const titleBox = classNames(`${classes.titleBox}`);
    const publishBox = classNames(`${classes.publishBox}`);
    const searchBox = classNames(`${classes.flex2}`);
    const bottomHeader = classNames(`${classes.bottomHeader}`, `${classes.flex2}`);
    const valueBox = classNames(`${classes.valueBox}`);

    const bottomHeaderContent = (
      <Grid container xs={12} className={bottomHeader} justify="center">

        <Grid xs={4} item className={valueBox}>
          <Avatar className={classes.valueImageBox}>
            <img src={handShake} className={classes.valueImage} alt="handShake" />
          </Avatar>
          <div className={classes.valueTextBox}>
            <Typography className={classes.valueText}>
              Be a hero. Help an organisation and improve your skills
            </Typography>
          </div>
        </Grid>

        <Grid xs={4} item className={valueBox}>
          <Avatar className={classes.valueImageBox}>
            <img src={wallClock} className={classes.valueImage} alt="wallClock" />
          </Avatar>
          <div className={classes.valueTextBox}>
            <Typography className={classes.valueText}>
              All you need to dedicate is an hour
            </Typography>
          </div>
        </Grid>

        <Grid xs={4} item className={valueBox}>
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
    );

    const topHeaderContent = (
      <Grid container xs={12} className={topHeader}>
        <Grid xs={4} item className={countryBox}>
          <Button variant="raised" color="primary">
            Primary
          </Button>
        </Grid>
        <Grid xs={4} item className={titleBox}>
          <Typography variant="title" className={classes.title}>
            One hour a Day
          </Typography>
        </Grid>
        <Grid xs={4} item className={publishBox}>
          <Link to="/publish">
            <Button onClick={this.handlePublishProject} variant="raised" color="primary" className={classes.publishButton}>
            Publish your social project
            </Button>
          </Link>
        </Grid>
      </Grid>
    );

    const searchArea = (
      <Grid container xs={12} className={topHeader}>
        <Grid xs={3}>.</Grid>
        <Grid xs={2} item>
          <TextField
            defaultValue="dance"
          />
        </Grid>
        <Grid xs={2}>
          <Button variant="raised" color="primary">
            Search
          </Button>
        </Grid>
      </Grid>
    );

    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="stretch"
        className={classes.headerArea}
      >

        {topHeaderContent}

        {searchArea}

        <Grid xs={12} item className={searchBox}>
          <Typography variant="subheading" className={classes.subtitle}>
            Spend 1 hour and help a social cause
          </Typography>
        </Grid>
        {bottomHeaderContent}

      </Grid>
    );
  }
}

export default withStyles(styles)(HomePage);

