/* eslint-disable */
import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AvatarWithText from './components/AvatarWithText';
import handShake from '../../assets/images/hand_shake.svg';
import wallClock from '../../assets/images/wall_clock.svg';
import group from '../../assets/images/group.svg';
import styles from './styles';
import Search from './components/Search';
import CategoryNavigation from './components/CategoryNavigation';


class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };
  }
  handlePublishProject = (event) => {
    event.preventDefault();
    this.context.router.history.push('/publish');
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignContent="stretch"
        direction="column"
        style={{
          margin: 0,
          width: '100%',
        }}
      >
        <Grid
          item
          container
          direction="column"
          justify="space-between"
          className={classes.headerArea}
          
        >

          <Grid item container xs={12} className={classes.topHeader}>
            <Grid xs={4} item className={classes.countryBox}>
              <Button variant="raised" color="primary">
              Primary
              </Button>
            </Grid>
            <Grid xs={4} item className={classes.titleBox}>
              <Typography variant="title" className={classes.title}>
              One hour a Day
              </Typography>
            </Grid>
            <Grid xs={4} item className={classes.publishBox}>
              <Link to="/publish">
                <Button onClick={this.handlePublishProject} variant="raised" color="primary" className={classes.publishButton}>
              Publish your social project
                </Button>
              </Link>
            </Grid>
          </Grid>

           <Grid item container xs={12} justify="center" spacing={0}>
            <Search />
          </Grid>

          <Grid item container xs={12} justify="center">
            <AvatarWithText
              gridSize={4}
              imageSource={handShake}
              text="Help an organisation and improve your skills"
              imageAltText="handShake"
            />
            <AvatarWithText
              gridSize={4}
              imageSource={wallClock}
              text="All you need to dedicate is an hour"
              imageAltText="wallClock"
            />
            <AvatarWithText
              gridSize={4}
              imageSource={group}
              text="1 hour of each person can make a huge impact"
              imageAltText="group"
            />
          </Grid>


        </Grid>
        
          <CategoryNavigation /> 
        
      </Grid>


    );
  }
}
Home.contextTypes = {
  router: object
};
Home.propTypes = {
  /* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired
};

export default withStyles(styles)(Home);
