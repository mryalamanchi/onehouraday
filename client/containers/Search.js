import React, { Component } from 'react';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	handleChange = event => {
		this.setState({
			search: event.target.value,
		});
	}

	handleOnSubmit = event => {
		event.preventDefault();
		const { search } = this.state;
		//send request to DB for specified project(s) that match search		
		//set filteredProjects equal to result of DB request
		console.log(search);
	}

	render() {
	
		return (
			<div>
				<h1>Search</h1>
				<form onSubmit={this.handleOnSubmit}>
					<input type="text" 
						value={this.state.search}
						onChange={this.handleChange.bind(this)}
					/>
					<button>Search</button>
				</form>
					<Project />	
			</div>
		)
	}
}

export default Search;
