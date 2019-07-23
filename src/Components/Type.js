import React, { Component } from "react";
import axios from "axios";
import "./Type.css";

class Type extends Component {
	state = {
		plants: [],
	};
	get() {
		const link = "https://kfsz.pythonanywhere.com/api/";
		return axios
			.get(`${link}plants/`)
			.then(response => {
				console.log(response);
				this.setState({
					plants: response.data.results,
				});
				console.log(this.state.plants);
			})
			.catch(error => {
				alert(error);
			});
	}
	render() {
		return <div className="type">{this.state.plants}</div>;
	}
}

export default Type;
