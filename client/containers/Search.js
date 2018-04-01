import React, { Component } from 'react';
import axios from 'axios';

import Project from '../components/Project';
import dummyProjects from '../dummy_data/dummy_projects';

const BASEURL = 'http://localhost:3000/api';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      results: dummyProjects
    };
  }

  getQueryURI = () => {
    const { searchQuery } = this.state;
    return `${BASEURL}/project?search=${searchQuery}`;
  };

  // TODO: replace with LinkedStateMixin https://reactjs.org/docs/two-way-binding-helpers.html
  handleChange = (event) => {
    this.setState({
      searchQuery: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('handleOnSubmit');
    axios.get(this.getQueryURI()).then((res) => {
      console.dir(res.data);
      this.setState({ results: res.data });
    }).catch((err) => {
      console.log(err);
    });
  };

  // for isolated dev of client-side
  populateResults = () => {
    console.log('populate with fake results');
    this.setState({
      results: dummyProjects
    });
  };

  // put request with dummy projects
  submitResults = () => {
    console.log('post request with fake results');
    dummyProjects.forEach((project) => {
      axios.post(`${BASEURL}/project`, Object.assign({}, project, project.contact_detail, project.location));
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

        <button onClick={this.populateResults}>[DEV] populate with fake projects</button>
        <br />
        <button onClick={this.submitResults}>[DEV] update DB with fake projects</button>
        {projects}
      </div>
    );
  }
}

export default Search;
