import React, { Component } from "react";
import axios from "axios";
import "./Register.css";

class Register extends Component {
	state = {};

	handleRegister = () => {
		const link = "http://127.0.0.1:8000/";
		const axios = require("axios");

		const Register = () => {
			try {
				return axios.post(`${link}users/register/`, {
					first_name: this.first_name,
					last_name: this.last_name,
					password: this.password,
					email: this.email,
				});
			} catch (error) {
				alert(error);
			}
		};

		const showRegistrationResponse = async () => {
			const data = Register()
				.then(response => {
					alert("Zalogowano pomyślnie");
				})
				.catch(error => {
					alert(
						"Rejestracja nie powiodła się, wypełnij poprawnie formularz"
					);
				});
		};
		showRegistrationResponse();
	};
	render() {
		return (
			<div className="register">
				<div className="register__inputCollection">
					<input
						className="register__input"
						name="first_name"
						type="text"
						label="first_name"
						placeholder="Imię"
					/>
					<input
						className="register__input"
						name="last_name"
						type="text"
						label="last_name"
						placeholder="Nazwisko"
					/>
					<input
						className="register__input"
						name="email"
						type="text"
						label="email"
						placeholder="E-Mail"
					/>
					<input
						className="register__input"
						name="password"
						type="password"
						label="password"
						placeholder="Hasło"
					/>
				</div>
				<div className="register__buttons">
					<button
						className="register__send"
						onClick={this.handleRegister()}
					>
						Zarejestruj sie
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
