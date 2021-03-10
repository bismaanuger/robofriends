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
			color1: "#3b2140",
			color2: "#313972",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	onColorChange1 = (event) => {
		this.setState({ color1: event.target.value });
	};

	onColorChange2 = (event) => {
		this.setState({ color2: event.target.value });
	};

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter((robot) => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		const divStyle = {
			background: `linear-gradient(90deg, ${this.state.color1} 0%, ${this.state.color2} 100%)`,
		};

		return (
			<div style={divStyle} className="h-100">
				<h1
					className="
						text-center text-5xl md:text-7xl
						font-bold mb-10 pt-10 text-purple-400"
				>
					.robofriends
				</h1>
				<div>
					<h3
						className="text-center text-2xl md:text-3xl
						font-bold mb-5 pt-2 text-purple-400"
					>
						Change background
					</h3>
				</div>
				<div className="flex justify-center ">
					<input
						className="w-20 h-10 shadow-lg mx-2 "
						type="color"
						value={this.state.color1}
						onChange={this.onColorChange1}
					></input>
					<input
						className="w-20 h-10 shadow-lg mx-2"
						type="color"
						value={this.state.color2}
						onChange={this.onColorChange2}
					></input>
				</div>
				<SearchBox onSearchChange={this.onSearchChange} />
				<ErrorBoundry>
					<CardList robots={filteredRobots} />
				</ErrorBoundry>
			</div>
		);
	}
}

export default App;
