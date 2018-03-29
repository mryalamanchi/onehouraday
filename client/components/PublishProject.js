/* eslint react/prop-types: 0 */
import React from 'react';
import { withStyles } from 'material-ui/styles';
import {
  FormLabel,
  // FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Public from 'material-ui-icons/Public';
import Place from 'material-ui-icons/Place';
import Photo from 'material-ui-icons/Photo';
import HeaderBar from './HeaderBar';

const styles = {
  root: {
    flexGrow: 1,
    marginLeft: 60,
    marginRight: 50,
    marginBottom: 20
  },
  flex: {
    display: 'flex'
  },
  flex1: {
    flex: 1
  },
  text: {
    color: 'rgba(0, 0, 0, 0.38)'
  },
  fillParent: {
    width: '100%',
    height: '100%'
  },
  formRow: {
    marginTop: 30,
    marginBottom: 40
  },
  formItem3Col: {
    paddingRight: 30,
    width: '25%'
  },
  formItem2Col: {
    paddingRight: 30,
    width: '50%'
  },
  projectPhoto: {
    width: 160,
    height: 160,
    color: '#9e9e9e'
  },
  boxProjectPhoto: {
    height: '100%',
    backgroundColor: '#D6D6D6',
    border: 'solid 1px #979797',
    padding: '60px 60px',
    width: '30%',
    margin: '0 auto'
  },
  boxIcon: {
    alignItems: 'center',
    padding: 10,
    marginRight: 30
  },
  icon: {
    width: 60,
    height: 60,
    color: '#9e9e9e'
  },
  textIcon: {
    paddingTop: 9
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: 500,
    padding: '10px 15px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: '#ffffff',
    letterSpacing: 0.5,
    backgroundColor: '#4a90e2',
    borderRadius: 2,
    boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12)'
  }
};

class PublishProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    // fetch from service?
    this.props.categories = ['EDUCATION', 'HUNGRY', 'POVERTY', 'HEALTH',
      'ENVIRONMENT', 'PEACE', 'JUSTICE', 'ANIMALS',
      'BUSINESS', 'HUMAN RIGHTS', 'OTHERS'];

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.value
      });
    };
  }

  handleSubmit(event) {
    console.log('A form was submitted: '); //  + this.state.value);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const headerParam = {
      title: 'One hour a Day',
      action: 'Publish a new social project',
      link: '/',
      icon: 'arrow_back'
    };
    return (
      <div className={classes.root}>
        <HeaderBar param={headerParam} />

        <form autoComplete="off">

          <div className={classes.formRow}>
            <FormGroup className={classes.boxProjectPhoto}>
              <FormGroup>
                <IconButton className={classes.fillParent}>
                  <Photo className={classes.projectPhoto} />
                </IconButton>
              </FormGroup>
              <TextField
                id="projectPhoto"
                label="UPLOAD YOUR PROJECT PHOTO"
                value={this.state.projectPhoto}
                onChange={this.handleChange('projectPhoto')}
                margin="normal"
              />
            </FormGroup>
          </div>

          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="projectName"
                label="What&apos;s your project name?"
                value={this.state.projectName}
                onChange={this.handleChange('projectName')}
                fullWidth
                margin="normal"
              />
            </FormGroup>
          </div>

          <FormLabel component="legend">What categories does your project belong to?</FormLabel>
          <div >
            {this.props.categories.map(category =>
              (<FormControlLabel
                className={classes.formItem3Col}
                control={
                  <Checkbox
                    checked={this.state[category]}
                    onChange={this.handleChange(category)}
                    value={category}
                  />
                }
                label={category}
              />))}
          </div>

          <FormLabel component="legend" className={classes.formRow}>What&apos;s your project about?</FormLabel>

          <FormLabel component="legend">Describe whats your project about</FormLabel>
          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="projectInfo"
                value={this.state.projectInfo}
                onChange={this.handleChange('projectInfo')}
                fullWidth
                margin="normal"
              />
            </FormGroup>
          </div>


          <FormLabel component="legend">What tasks needs to be done</FormLabel>
          <div className={classNames(`${classes.formRow}`, `${classes.flex}`)}>
            <TextField
              className={classes.formItem2Col}
              id="taskName"
              label="Task name"
              value={this.state.taskName}
              onChange={this.handleChange('taskName')}
            />
            <TextField
              className={classes.formItem2Col}
              id="volunteerRole"
              label="Volunteer skill"
              value={this.state.volunteerSkill}
              onChange={this.handleChange('volunteerSkill')}
            />
          </div>

          <div className={classes.formRow}>
            <Link to="/" className={classes.link}>Add</Link>
          </div>


          <FormLabel component="legend" className={classes.formRow}>From where this project needs help?</FormLabel>
          <div className={classNames(`${classes.formRow}`, `${classes.flex}`)}>
            <FormGroup className={classes.boxIcon}>
              <IconButton>
                <Public className={classes.icon} />
              </IconButton>
              <FormHelperText className={classes.textIcon}>Entire World</FormHelperText>
            </FormGroup>
            <FormGroup className={classes.boxIcon}>
              <IconButton>
                <Place className={classes.icon} />
              </IconButton>
              <FormHelperText className={classes.textIcon}>Specific Location</FormHelperText>
            </FormGroup>
          </div>


          <FormLabel component="legend">How can volunteers contact you?</FormLabel>
          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="ownerName"
                label="Your name"
                value={this.state.ownerName}
                onChange={this.handleChange('ownerName')}
                fullWidth
                margin="normal"
              />
              <TextField
                id="ownerEmail"
                label="Your email"
                value={this.state.ownerEmail}
                onChange={this.handleChange('ownerEmail')}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.showOwnerEmail}
                    onChange={this.handleChange('showOwnerEmail')}
                    value="jason"
                  />
                  }
                label="Show my email"
              />
            </FormGroup>
          </div>


          <div className={classes.formRow}>
            <Link to="/" className={classes.link}>Publish</Link>
          </div>

        </form>

      </div>
    );
  }
}

export default withStyles(styles)(PublishProject);
