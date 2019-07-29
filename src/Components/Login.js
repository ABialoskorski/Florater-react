import React, { Component } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import "./Login.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

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
		var Config = {};
		var userdata = token => {
			var Config = {
				headers: {
					Authorization: "JWT " + token,
				},
			};
		};

		const link = "https://kfsz.pythonanywhere.com/api/";

		let loginData = {
			email: this.state.email,
			password: this.state.password,
		};
		const UserData = () => {
			try {
				return axios.get(`${link}users/user-data/`, Config);
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
						console.log("TOKEN: " + this.state.token);
						const cookies = new Cookies();
						cookies.set("loginToken", this.state.token, {
							path: "/login",
						});
						userdata(token);

						this.props.updatePost(this.state.token);
						alert("Zalogowano pomyślnie");
					})
					.catch(error => {
						alert("Logowanie nie powiodło się, wprowadź poprawne dane");
					});
			};
			showLoginResponse();
		};
		log();
	};
	render() {
		const token = this.props.token;
		return (
			<div className="login">
				<h1>{token}</h1>
				<form onSubmit={this.handleLogin} className="login__inputCollection">
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
						Zaloguj się
					</button>
				</div>
				<p className="login__register">
					Nie posiadasz jeszcze konta?
					<NavLink to="/register"> Zarejestruj się</NavLink>
				</p>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		token: state.token,
	};
};
const mapDispatchToProps = dispatch => {
	return {
		updatePost: token => {
			dispatch({ type: "UPDATE_POST", token: token });
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);
