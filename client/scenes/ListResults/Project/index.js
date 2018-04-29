import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import styles from './styles';

const Project = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="/static/media/gum_homebanner.85680b2d.jpg"
        title="Project media"
      />
      <CardContent>
        <div className={classes.title}>
          {props.name} -
          <span className={classes.location}>
            {props.location.city}, {props.location.country}
          </span>
        </div>
        <Typography component="p">{props.description}</Typography>
        {props.skills.map(skill => (
          <Chip key={skill} label={skill} className={classes.chip} />
        ))}
      </CardContent>
    </Card>
  );
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired,
  /* eslint react/forbid-prop-types: 0 */
  classes: PropTypes.object.isRequired,
  skills: PropTypes.array.isRequired
};

export default withStyles(styles)(Project);
