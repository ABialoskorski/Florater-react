import React, { Component } from "react";
import axios from "axios";
import "./Register.css";

class Register extends Component {
	state = {
		first_name: "",
		last_name: "",
		email: "",
		password: "",
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleRegister = e => {
		e.preventDefault();
		console.log(this.state);
		let userData = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email: this.state.email,
			password: this.state.password,
		};
		const link = "https://kfsz.pythonanywhere.com/api/users/register/";
		const Register = () => {
			try {
				return axios.post(link, userData);
			} catch (error) {
				alert(error);
			}
		};
		const showRegistrationResponse = async () => {
			const data = Register()
				.then(response => {
					alert("Zarejestrowano pomyślnie");
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
				<form
					onSubmit={this.handleRegister}
					className="register__inputCollection"
				>
					<input
						className="register__input"
						name="first_name"
						type="text"
						label="first_name"
						placeholder="Imię"
						onChange={this.handleChange}
						value={this.state.first_name}
					/>
					<input
						className="register__input"
						name="last_name"
						type="text"
						label="last_name"
						placeholder="Nazwisko"
						onChange={this.handleChange}
					/>
					<input
						className="register__input"
						name="email"
						type="text"
						label="email"
						placeholder="E-Mail"
						onChange={this.handleChange}
					/>
					<input
						className="register__input"
						name="password"
						type="password"
						label="password"
						placeholder="Hasło"
						onChange={this.handleChange}
					/>
				</form>
				<div className="register__buttons">
					<button
						className="register__send btn blue lighten-1 z-depth-0"
						onClick={this.handleRegister}
					>
						Zarejestruj się
					</button>
				</div>
			</div>
		);
	}
}

export default Register;
