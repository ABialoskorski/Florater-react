import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Form.css";

class Form extends Component {
	state = {
		group: "",
		place: "",
		habitat: "",
		user_date: "",
		location: "",
		comment: "",
		positions: [],
	};

	handleGetForms = () => {
		var link = "https://kfsz.pythonanywhere.com/api/";
		var axios = require("axios");
		var cookies = new Cookies();
		var JWT_TOKEN = cookies.get("loginToken");
		console.log("TOKEN: " + JWT_TOKEN);
		var Config = {
			headers: {
				Authorization: "JWT " + JWT_TOKEN,
			},
		};
		return axios
			.get(`${link}reports/main/?`, Config)
			.then(response => {
				this.setState({ positions: response.data.results });
			})
			.catch(error => {
				console.log(error);
			});
	};
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleSend = () => {
		var link = "https://kfsz.pythonanywhere.com/api/";
		var axios = require("axios");
		var cookies = new Cookies();
		var JWT_TOKEN = cookies.get("loginToken");
		console.log("TOKEN: " + JWT_TOKEN);
		var Config = {
			headers: {
				Authorization: "JWT " + JWT_TOKEN,
			},
		};
		console.log(this.state);
		let data = {
			group: this.state.group,
			place: this.state.place,
			habitat: this.state.habitat,
			user_date: this.state.user_date,
			location: this.state.location,
			comment: this.state.comment,
		};
		const Send = () => {
			try {
				return axios.post(`${link}reports/main/?`, data, Config);
			} catch (error) {
				alert(error);
			}
		};

		const showSendResponse = async () => {
			const data = Send()
				.then(response => {
					alert("Wysłano pomyślnie");
				})
				.catch(error => {
					alert("WYSYŁANIE NIE POWIODŁO SIĘ");
				});
		};
		showSendResponse();
	};
	render() {
		return (
			<div className="form">
				<div className="form__positions">
					<ul>
						{this.state.positions.map(position => (
							<div key={position.id}>
								<li>Grupa: {position.group}</li>
								<li>Nazwa stanowiska: {position.place}</li>
								<li>Siedlisko: {position.habitat}</li>
								<li>Data: {position.user_date}</li>
								<li>Współrzędne: {position.location}</li>
								<li>Informacje dodatkowe: {position.comment}</li>
								<hr />
							</div>
						))}
					</ul>
				</div>
				<p className="form__title">Dodaj Stanowisko</p>
				<form className="form__inputCollection">
					<input
						className="form__input"
						name="group"
						placeholder="Numer grupy"
						type="text"
						onChange={this.handleChange}
					/>
					<input
						className="form__input "
						name="place"
						type="text"
						placeholder="Nazwa stanowiska"
						onChange={this.handleChange}
					/>
					<input
						className="form__input"
						name="habitat"
						type="text"
						placeholder="Siedlisko"
						onChange={this.handleChange}
					/>
					<input
						className="form__input"
						name="user_date"
						type="text"
						placeholder="Data"
						onChange={this.handleChange}
					/>
					<input
						className="form__input"
						name="location"
						type="text"
						placeholder="Współrzędne geograficzne"
						onChange={this.handleChange}
					/>
					<input
						name="comment"
						type="text"
						placeholder="Informacje dodatkowe"
						onChange={this.handleChange}
					/>
				</form>
				<div className="form__buttons">
					<button
						className="form__send btn blue lighten-1 z-depth-0"
						onClick={this.handleSend}
					>
						Dodaj
					</button>
					<button
						className="form__send btn blue lighten-1 z-depth-0"
						onClick={this.handleGetForms}
					>
						Formularze
					</button>
				</div>
			</div>
		);
	}
}

export default Form;
