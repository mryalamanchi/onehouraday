import React, { Component } from 'react';
// import axios from 'axios';

import Project from './Project';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
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
    // const { searchQuery } = this.state;
    // send request to DB for specified project(s) that match searchQuery
    // set filteredProjects equal to result of DB request
    /*
    axios.get('http://localhost:9000/projects?abc')
      .then((response) => {
        console.log(response);
      });
    */
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button onClick={this.handleOnSubmit}>Search</button>
        </form>
        <Project search={this.state.searchQuery} />
      </div>
    );
  }
}

export default Search;
