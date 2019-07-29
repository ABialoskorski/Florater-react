import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Type.css";

class Type extends Component {
	state = {
		family_latin_name: "",
		family_polish_name: "",
		group_geohist: "",
		group_raunkiaer: "",
		id: null,
		latin_name: "",
		name_synonyms: "",
		polish_name: "",
	};
	handleGetTypes = e => {
		e.preventDefault;
		var get = () => {
			const link = "https://kfsz.pythonanywhere.com/api/";
			const axios = require("axios");
			return (
				axios
					.get(`${link}plants/?`)
					.then(response => {
						// console.log(response.data.results);
						let plants2 = [];
						response.data.results.map(id => {
							return plants2.push(id);
						});
						console.log(plants2);
					})
					// this.setState({
					// 	this.state.family_latin_name = plants2.family_latin_name,
					// })
					.catch(error => {
						console.log(error);
					})
			);
		};
		get();
	};

	render() {
		console.log(this.state.plants);
		return (
			<div className="type">
				<button className="type_button" onClick={this.handleGetTypes} />
				<p>{this.state.plants}</p>
			</div>
		);
	}
}

export default Type;
