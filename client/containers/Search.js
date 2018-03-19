import React, { Component } from 'react';
import Project from './Project';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const { search } = this.state;
    // send request to DB for specified project(s) that match search
    // set filteredProjects equal to result of DB request
  }

  render() {
    return (
      <div>
        <h1>Search</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
        <Project search={this.state.search} />
      </div>
    );
  }
}

export default Search;
