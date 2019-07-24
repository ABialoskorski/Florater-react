import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Type.css";

class Type extends Component {
	state = {
		plants: [],
	};
	handleGetTypes = e => {
		e.preventDefault();
		var get = () => {
			const link = "https://kfsz.pythonanywhere.com/api/";
			const Types = () => {
				try {
					return axios.get(link + "plants/?limit=20");
				} catch (error) {
					alert(error);
				}
			};
			const showTypesResponse = () => {
				const data = Types()
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
			};
		};
		get();
	};
	render() {
		return (
			<div className="type">
				<p>{this.state.plants}</p>
			</div>
		);
	}
}

export default Type;
