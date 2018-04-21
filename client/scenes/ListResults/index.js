import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { string, func, arrayOf, object } from 'prop-types';
import Project from './Project';
import actions from './actions';
import dummyProjects from '../../dummy_data/dummy_projects';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles';
import searchIcon from '../../assets/images/search.svg';

/* eslint no-underscore-dangle: 0 */

class ListResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.searchValue,
      searchedValue: this.props.searchValue
    };
  }

  componentDidMount() {
    this.props.searchProjects(this.state.searchValue);
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleOnSubmit(event);
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.searchProjects(this.state.searchValue);
  };

  render() {
    const { classes } = this.props;
    const headerParam = {
      title: 'One hour a Day',
      action: 'Search projects',
      link: '/',
      icon: 'arrow_back'
    };
    return (
      <div className={classes.root}>
        <HeaderBar param={headerParam} />
        <Grid
          container
          spacing={24}
          justify="center"
          alignContent="stretch"
          style={{ padding: 20 }}
        >
          {this.state.searchedValue &&
            this.searchedValue !== '' && (
              <Grid item xs={10}>
                <Typography color="textSecondary" component="p">
                  {this.state.searchedValue} -&nbsp;
                  {this.props.results ? this.props.results.length : 0} found
                </Typography>
              </Grid>
            )}

          <Grid item xs={10} className={classes.inputContainer}>
            <div className={classes.inputWithSearch}>
              <TextField
                className={classes.textField}
                placeholder="Learn by helping. Search for a task to do."
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.searchValue}
                InputProps={{
                  // disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput
                  }
                }}
              />
              <div
                className={classes.searchIcon}
                role="presentation"
                onClick={this.handleOnSubmit}
              >
                <img src={searchIcon} alt="Search" />
              </div>
            </div>
          </Grid>
          <Grid item xs={10}>
            {/* <div>
              Filter by
              <button>Location</button>
              <button>Category</button>
              <button>Skills</button>
              <button>Skills</button>
            </div> */}
          </Grid>

          {this.props.results.map(project => (
            <Grid item xs={10} key={project._id}>
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchProjects: searchValue => dispatch(actions.searchProjects(searchValue))
});

const mapStateToProps = state => ({
  searchValue: state.Home.search.searchValue,
  results: state.ListResults.results
});

ListResults.propTypes = {
  searchProjects: func.isRequired,
  searchValue: string.isRequired,
  results: arrayOf(object),
  /* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired
};

ListResults.defaultProps = {
  results: dummyProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ListResults));
