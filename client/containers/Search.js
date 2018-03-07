import React, { Component } from 'react';

class Search extends Component {

	constructor() {
		super();
		this.state = {
			search: ''
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value});
	}

	render() {
		let filteredProjects = this.props.projects.filter(
			(project) => {
				return project.name.indexOf(this.state.search) !== -1;
			}
		);
		return (
			<div>
				<h1>Search</h1>
				<input type="text" 
					value={this.state.search}
					onChange={this.updateSearch.bind(this)}
				/>
				<ul>
					{filteredProjects.map((project) => {
						return <Project project={project} key={project.id} />
					})}
				</ul>
			</div>
		)
	}
}

export default Search;
