import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: "",
		};
	}

	componentDidMount() {
		fetch("http://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return (
			<div>
				<h1
					className="
						text-center text-5xl md:text-7xl
						font-bold mb-10 pt-10 text-purple-400"
				>
					.robofriends
				</h1>
				<SearchBox onSearchChange={this.onSearchChange} />
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</div>
		);
	}
}

export default App;
