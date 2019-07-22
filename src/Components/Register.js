import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
	state = {};
	handleRegister = () => {};
	render() {
		return (
			<div className="register">
				<div className="register__inputCollection">
					<input
						className="register__input"
						v-validate="'required'"
						name="first_name"
						type="text"
						label="first_name"
						placeholder="Imię"
						v-model="first_name"
					/>
					<v-spacer />
					<input
						className="register__input"
						v-validate="'required'"
						name="last_name"
						type="text"
						label="last_name"
						placeholder="Nazwisko"
						v-model="last_name"
					/>
					<v-spacer />
					<input
						className="register__input"
						v-validate="'required|email'"
						name="email"
						type="text"
						label="email"
						placeholder="E-Mail"
						v-model="email"
					/>
					<v-spacer />
					<input
						className="register__input"
						v-validate="'required|password'"
						name="password"
						type="password"
						label="password"
						placeholder="Hasło"
						v-model="password"
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
