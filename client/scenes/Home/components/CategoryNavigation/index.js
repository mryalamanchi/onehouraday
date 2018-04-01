/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import styles from './styles';


const CategoryNavigation = (props) => {
  const { classes } = props;
  return (

    <Grid item container spacing={0}>
      <Typography className={classes.browseProjects} variant="subheading">
    BROWSE PROJECTS BY CATEGORY
      </Typography>
      <Grid className={classes.projectsContainer} container justify="space-between" alignItems="center">
        <Grid container item spacing={0} direction="column" xs="4">
          <Grid className={classes.projectItem} item>Health</Grid>
          {/* <Grid item container justify="space-around" alignItems="center">
            <Grid item className={classes.projectItem}>Health</Grid>
            <Grid item>0</Grid>
          </Grid> */}
          <Grid className={classes.projectItem} item>Poverty</Grid>
          <Grid className={classes.projectItem} item>Hungry</Grid>
          <Grid className={classes.projectItem} item>Education</Grid>
        </Grid>
        <Grid container item spacing={0} direction="column" xs="4">
          <Grid className={classes.projectItem} item>Environment</Grid>
          <Grid className={classes.projectItem} item>Peace</Grid>
          <Grid className={classes.projectItem} item>Justice</Grid>
          <Grid className={classes.projectItem} item>Animals</Grid>
        </Grid>
        <Grid container item spacing={0} direction="column" xs="4">
          <Grid className={classes.projectItem} item>Business</Grid>
          <Grid className={classes.projectItem} item>Human Rights</Grid>
          <Grid className={classes.projectItem} item>Others</Grid>
          <Grid className={classes.projectItem} item>View all</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(CategoryNavigation);
