/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import styles from './styles';
import NavColumn from './components/NavColumn';


const CategoryNavigation = (props) => {
  const { classes } = props;
  const columnOne = ['Health', 'Poverty', 'Hungry', 'Education'];
  const columnTwo = ['Environment', 'Peace', 'Justice', 'Animcals'];
  const columnThree = ['Business', 'Human Rights', 'Others', 'View all'];
  return (

    <Grid item container spacing={0}>
      <Typography className={classes.browseProjects} variant="subheading">
    BROWSE PROJECTS BY CATEGORY
      </Typography>
      <Grid className={classes.projectsContainer} container justify="space-between" alignItems="center">
        {/* <Grid item container justify="space-around" alignItems="center">
            <Grid item className={classes.projectItem}>Health</Grid>
            <Grid item>0</Grid>
          </Grid> */}
        {<NavColumn categories={columnOne} classes={classes} />}
        {<NavColumn categories={columnTwo} classes={classes} />}
        {<NavColumn categories={columnThree} classes={classes} />}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CategoryNavigation);
