import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { string, func, arrayOf, object } from 'prop-types';
import Project from './Project';
import actions from './actions';
import dummyProjects from '../../dummy_data/dummy_projects';

class ListResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: this.props.searchValue
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

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.searchProjects(this.state.searchValue);
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <p>
          {this.props.results ? this.props.results.length : 0} results for {this.state.searchValue}
        </p>
        <input
          type="text"
          placeholder="Learn by helping. Search for a task to do."
          value={this.state.searchValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleOnSubmit}>Search</button>
        <div>
          Filter by
          <button>Location</button>
          <button>Category</button>
          <button>Skills</button>
        </div>
        <Fragment>
          {this.props.results.map(project =>
          (<Project key={project.id} {...project} />))}
        </Fragment>
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
  results: arrayOf(object)
};

ListResults.defaultProps = {
  results: dummyProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(ListResults);
