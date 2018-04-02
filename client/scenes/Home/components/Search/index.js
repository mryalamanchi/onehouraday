/* eslint-disable */
import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import {connect} from 'react-redux';
import { object } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import styles from './styles';
import searchIcon from '../../../../assets/images/search.svg';
import searchActions from './actions';


class Search extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      findTabIndex: 0,
      searchValue: ''
    };
    this.handleTabClick = this.handleTabClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  getTabClassName(index) {
    const { classes } = this.props;
    return classNames(
      classes.searchOption,
      { [`${classes.searchOptionSelected}`]: this.state.findTabIndex === index }
    );
  }
  handleSearchChange(event) {
    this.setState({ searchValue: event.target.value });
  }
  handleTabClick(event) {
    this.setState({ findTabIndex: Number(event.target.dataset.index) });
  }
  handleSearch() {    
    this.props.setSearchData(this.state.searchValue, this.state.findTabIndex);
    this.context.router.history.push('/search');
  }
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Grid container direction="column" spacing={24} className={classes.searchContainer} >
          <Grid item>
            <Grid container direction="row">
              <Grid onClick={this.handleTabClick} data-index="0" item className={this.getTabClassName(0)}>Find projects</Grid>
              <Grid onClick={this.handleTabClick} data-index="1" item className={this.getTabClassName(1)}>Find tasks</Grid>
              <Grid onClick={this.handleTabClick} data-index="2" item className={this.getTabClassName(2)}>Find volunteers</Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.inputContainer}>
            <div className={classes.inputWithSearch}>
              <TextField
                className={classes.textField}
                placeholder="Learn by helping. Search for a task to do."
                onChange={this.handleSearchChange}
                InputProps={{
                disableUnderline: true,
                classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput
                }
              }}
              />
              <div
                className={classes.searchIcon}
                role="presentation"
                onClick={this.handleSearch}
              >
                <img src={searchIcon} alt="Search" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({  
    setSearchData: (searchValue, searchTabIndex) =>
      dispatch(searchActions.setSearchData(searchValue, searchTabIndex))
})


Search.contextTypes = {
  router: object
};
Search.propTypes = {
/* eslint react/forbid-prop-types: 0 */
  classes: object.isRequired
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Search));
