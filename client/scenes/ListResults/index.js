import React, { Component, Fragment } from 'react';
import Project from './Project';
import dummyProjects from '../../dummy_data/dummy_projects';

class ListResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: dummyProjects
    };
  }
  render() {
    return (

      <Fragment >
        {this.state.results.map(project => <Project {...project} />)}
      </Fragment>
    );
  }
}

ListResults.propTypes = {

};

export default ListResults;
