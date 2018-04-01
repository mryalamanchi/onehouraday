import React from 'react';
import { string, number, object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import styles from './styles';


const AvatarWithText = (props) => {
  const { classes } = props;
  return (
    <Grid xs={props.gridSize} item className={classes.valueBox}>
      <Avatar className={classes.valueImageBox}>
        <img src={props.imageSource} className={classes.valueImage} alt={props.imageAltText} />
      </Avatar>
      <div className={classes.valueTextBox}>
        <Typography className={classes.valueText}>
          {props.text}
        </Typography>
      </div>
    </Grid>);
};

AvatarWithText.propTypes = {
  imageSource: string.isRequired,
  text: string.isRequired,
  imageAltText: string,
  gridSize: number.isRequired,
  /* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired
};

AvatarWithText.defaultProps = {
  imageAltText: ''
};

export default withStyles(styles)(AvatarWithText);
