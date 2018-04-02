import React from 'react';
import PropTypes from 'prop-types';

const Project = props => (
  <div>
    <h1>{props.name} - {props.location.city}, {props.location.country}</h1>
    <p>{props.description}</p>
  </div>
);

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape({
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired
  }).isRequired
};

export default Project;
