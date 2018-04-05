import React from 'react';
import { object, array } from 'prop-types';
import Grid from 'material-ui/Grid';
import CategoryNavItem from './components/CategoryNavItem';

const NavColumn = (props) => {
  const { categories, classes } = props;
  const columnCategories = categories.map(category =>
    <CategoryNavItem projectItemClass={classes.projectItem} category={category} />);

  return (
    <Grid container item spacing={0} direction="column" xs="4">
      { columnCategories }
    </Grid>
  );
};

NavColumn.propTypes = {
  /* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired,
  categories: array.isRequired
};

export default NavColumn;
