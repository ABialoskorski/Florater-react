import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Type.css";

class Type extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		const link = "https://kfsz.pythonanywhere.com/api/";
		const axios = require("axios");
		return axios
			.get(`${link}plants/?`)
			.then(response => {
				this.setState({ data: response.data.results });
			})
			.catch(error => {
				console.log(error);
			});
	}
	render() {
		return (
			<div className="type">
				<ul>
					{this.state.data.map(results => (
						<div key={results.id}>
							<li>
								{results.id}: {results.latin_name}, {results.polish_name}
							</li>
						</div>
					))}
				</ul>
			</div>
		);
	}
}

export default Type;
