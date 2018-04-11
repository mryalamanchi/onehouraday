/* eslint class-methods-use-this: ["error", { "exceptMethods": ["handleSubmit"] }] */
import React from 'react';
import classNames from 'classnames';
import update from 'immutability-helper';
import { array, object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {
  FormLabel,
  FormGroup,
  FormControlLabel,
  FormHelperText
} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Public from 'material-ui-icons/Public';
import Place from 'material-ui-icons/Place';
import Photo from 'material-ui-icons/Photo';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles';


class PublishProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.categories.map(category => ({ [`'${category}'`]: false })),
      helpFromWorld: true,
      helpFromLocation: false,
      projectInfo: '',
      tasks: [{ taskName: '', volunteerSkill: '' }],
      showOwnerEmail: false
    };

    this.switchHelpLocation = this.switchHelpLocation.bind(this);
    this.addTask = this.addTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  addTask() {
    this.setState(prevState => ({
      tasks: [...prevState.tasks, { taskName: '', volunteerSkill: '' }]
    }));
  }

  updateTask(taskParam, index) {
    return (event) => {
      const val = event.target.value;
      this.setState(prevState => ({
        tasks: update(prevState.tasks, { [index]: { [taskParam]: { $set: val } } })
      }));
    };
  }

  updateCategories(elem, index) {
    return (event) => {
      const val = event.target.checked;
      this.setState(prevState => ({
        categories: update(prevState.categories, { [index]: { [`'${elem}'`]: { $set: val } } })
      }));
    };
  }

  switchHelpLocation(from, to) {
    return (event) => {
      this.setState({
        [from]: event.target.checked,
        [to]: !event.target.checked
      });
    };
  }

  handleCheckboxChange(name) {
    return (event) => {
      this.setState({
        [name]: event.target.checked
      });
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
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

        <form autoComplete="off" className={classes.form}>

          <div className={classes.formRow}>
            <FormGroup className={classes.boxProjectPhoto}>
              <IconButton component="label" className={classes.fillParent}>
                <Photo className={classes.projectPhoto} />
                <input
                  accept="image/*"
                  className={classes.hidden}
                  id="projectPhoto"
                  name="projectPhoto"
                  onChange={this.handleChange}
                  value={this.state.projectPhoto}
                  type="file"
                />
              </IconButton>
              <label htmlFor="projectPhoto">
                <Button component="span" className={classes.labelProjectPhoto}>
                  UPLOAD YOUR PROJECT PHOTO
                </Button>
              </label>
            </FormGroup>
          </div>

          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="projectName"
                name="projectName"
                label="What&apos;s your project name?"
                value={this.state.projectName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
            </FormGroup>
          </div>

          <FormLabel component="legend">What categories does your project belong to?</FormLabel>
          {this.props.categories.map((category, index) =>
            (<FormControlLabel
              className={classes.formItem3Col}
              control={
                <Checkbox
                  checked={this.state.categories[category]}
                  onChange={this.updateCategories(category, index)}
                  value={this.state.categories[category]}
                />
              }
              label={category}
            />))}

          <FormLabel component="legend" className={classes.formRow}>What&apos;s your project about?</FormLabel>
          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="projectInfo"
                name="projectInfo"
                value={this.state.projectInfo}
                onChange={this.handleChange}
                label="Describe whats your project about"
                fullWidth
                margin="normal"
              />
            </FormGroup>
            <FormHelperText className={classes.counter}>
              {this.state.projectInfo.length}/250
            </FormHelperText>
          </div>


          <FormLabel component="legend">What tasks needs to be done</FormLabel>
          {this.state.tasks.map((task, index) =>
            (
              <div className={classNames(`${classes.formRow}`, `${classes.flex}`)}>
                <TextField
                  className={classes.formItem2Col}
                  id="taskName"
                  label="Task name"
                  value={task.taskName}
                  onChange={this.updateTask('taskName', index)}
                />
                <TextField
                  className={classes.formItem2Col}
                  id="volunteerSkill"
                  label="Volunteer Skill"
                  value={task.volunteerSkill}
                  onChange={this.updateTask('volunteerSkill', index)}
                />
              </div>
            ))}

          <div className={classes.formRow}>
            <Button onClick={this.addTask} className={classes.link}>Add</Button>
          </div>


          <FormLabel component="legend" className={classes.formRow}>From where this project needs help?</FormLabel>
          <div className={classNames(`${classes.formRow}`, `${classes.flex}`)}>
            <FormGroup className={classNames(`${classes.boxIcon}`, `${this.state.helpFromWorld ? classes.boxIconSelected : ''}`)}>
              <Checkbox
                id="helpFromWorld"
                icon={<Public className={classes.icon} />}
                checkedIcon={<Public className={classes.icon} />}
                checked={this.state.helpFromWorld}
                onChange={this.switchHelpLocation('helpFromWorld', 'helpFromLocation')}
              />
              <FormHelperText className={classes.textIcon}>Entire World</FormHelperText>
            </FormGroup>
            <FormGroup className={classNames(`${classes.boxIcon}`, `${this.state.helpFromLocation ? classes.boxIconSelected : ''}`)}>
              <Checkbox
                id="helpFromLocation"
                icon={<Place className={classes.icon} />}
                checkedIcon={<Place className={classes.icon} />}
                checked={this.state.helpFromLocation}
                onChange={this.switchHelpLocation('helpFromLocation', 'helpFromWorld')}
              />
              <FormHelperText className={classes.textIcon}>Specific Location</FormHelperText>
            </FormGroup>
          </div>


          <FormLabel component="legend">How can volunteers contact you?</FormLabel>
          <div className={classes.formRow}>
            <FormGroup>
              <TextField
                id="ownerName"
                label="Your name"
                name="ownerName"
                value={this.state.ownerName}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                id="ownerEmail"
                label="Your email"
                name="ownerEmail"
                value={this.state.ownerEmail}
                onChange={this.handleChange}
                fullWidth
                margin="normal"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.showOwnerEmail}
                    onChange={this.handleCheckboxChange('showOwnerEmail')}
                    value={this.state.showOwnerEmail}
                  />
                }
                label="Show my email"
              />
            </FormGroup>
          </div>

          <div className={classes.formRow}>
            <Button onClick={this.handleSubmit} className={classes.link}>Publish</Button>
          </div>

        </form>

      </div>
    );
  }
}

PublishProject.propTypes = {
  categories: array,
  /* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired
};

PublishProject.defaultProps = {
  // fetch from service?
  categories: ['EDUCATION', 'HUNGRY', 'POVERTY', 'HEALTH',
    'ENVIRONMENT', 'PEACE', 'JUSTICE', 'ANIMALS',
    'BUSINESS', 'HUMAN RIGHTS', 'OTHERS']
};

export default withStyles(styles)(PublishProject);

