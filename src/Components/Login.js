import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Login.css";

class Login extends Component {
	state = {
		email: "",
		password: "",
		token: "",
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleLogin = e => {
		e.preventDefault();
		var Config = {
			headers: {
				Authorization: "JWT " + this.state.token,
			},
		};
		console.log(this.state);
		const link = "https://kfsz.pythonanywhere.com/api";

		let loginData = {
			email: this.state.email,
			password: this.state.password,
		};

		const UserData = () => {
			try {
				return axios.get(link + "users/user-data/", Config);
			} catch (error) {
				alert(error);
			}
		};

		var log = () => {
			var token = "";
			var JSONParsed = "";
			var JSONdata = "";

			const Login = () => {
				try {
					return axios.post(link + "users/obtain-token/", loginData);
				} catch (error) {
					alert(error);
				}
			};

			const showLoginResponse = () => {
				const data = Login()
					.then(response => {
						this.setState({ token: response.data.token });
						console.log(this.state.token);
						JSONdata = JSON.stringify(response);
						JSONParsed = JSON.parse(JSONdata);
						const cookies = new Cookies();
						cookies.set("loginToken", this.state.token, {
							path: "/login",
						});
						this.userdata(token);
					})
					.catch(error => {
						alert(
							"Logowanie nie powiodło się, wprowadź poprawne dane"
						);
					});
			};
			showLoginResponse();
		};
	};

	render() {
		return (
			<div className="login">
				<form
					onSubmit={this.handleLogin}
					className="login__inputCollection"
				>
					<input
						className="login__input"
						name="email"
						type="text"
						label="email"
						placeholder="E-Mail"
						onChange={this.handleChange}
					/>
					<input
						className="login__input"
						name="password"
						type="password"
						label="password"
						placeholder="Hasło"
						onChange={this.handleChange}
					/>
				</form>
				<div className="login__buttons">
					<button
						className="login__send btn blue lighten-1 z-depth-0"
						onClick={this.handleLogin}
					>
						Zarejestruj się
					</button>
				</div>
				<p class="login__register">
					Nie posiadasz jeszcze konta?
					<a href="/register"> Zarejestruj się</a>
				</p>
			</div>
		);
	}
}
export default Login;
