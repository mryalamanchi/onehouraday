import React from 'react';
import Grid from 'material-ui/Grid';
import { string } from 'prop-types';


const CategoryNavItem = (props) => {
  const { category, projectItemClass } = props;
  return (
    <Grid className={projectItemClass} item>{ category }</Grid>
  );
};

CategoryNavItem.propTypes = {
  category: string.isRequired,
  projectItemClass: string.isRequired
};

export default CategoryNavItem;
