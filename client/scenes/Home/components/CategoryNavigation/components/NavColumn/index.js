import React from 'react';
import Grid from 'material-ui/Grid';

const NavColumn = (props) => {
  const { categories } = props;
  const columnCategories = categories.map(category=> {
    <CategorynavItem category={category}/>
  });

  return (
    <Grid container item spacing={0} direction="column" xs="4">
      { columnCategoires }
    </Grid>
  )
};

export const NavColumn;