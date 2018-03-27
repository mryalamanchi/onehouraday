import React, { Component } from 'react';
import axios from 'axios';

import Project from '../components/Project';
import dummyProjects from '../dummy_data/dummy_projects';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: dummyProjects
    };
  }

  // TODO: replace with LinkedStateMixin https://reactjs.org/docs/two-way-binding-helpers.html
  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit');
    const { searchQuery } = this.state;
    axios.get(`http://localhost:3000/api/project?search=${searchQuery}`).then((res) => {
      this.setState({ results: res.data });
    });
  };

  render() {
    const projects = this.state.results.map(project =>
      <Project {... project} />);

    return (
      <div>
        <h1>Search</h1>
        <p>{this.state.results.length} results for {this.state.searchQuery}</p>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            placeholder="Learn by helping. Search for a task to do."
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button onClick={this.handleOnSubmit}>Search</button>
        </form>
        <div>
          Filter by
          <button>Location</button>
          <button>Category</button>
          <button>Skills</button>
        </div>

        {projects}
      </div>
    );
  }
}

export default Search;
