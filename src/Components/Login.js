import React, { Component } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import "./Login.css";

class Login extends Component {
	state = {
		email: "",
		password: "",
		token: "",
		JSONParsed: "",
		JSONdata: "",
	};

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};
	handleLogin = e => {
		e.preventDefault();
		console.log(this.state);
		const link = "https://kfsz.pythonanywhere.com/api";

		let loginData = {
			email: this.state.email,
			password: this.state.password,
		},
			let userdata = (token) => {	
				let Config = {
					headers: {
						Authorization: "JWT " + token,
					},
				};
	
				const UserData = () => {
					try {
						return axios.get(
							link + "users/user-data/",
							Config
						);
					} catch (error) {
						alert(error);
					}
				};
		}
	}
	
		log() {
		  
	
		  const Login = () => {
			try {
			  return axios.post(
				link + "users/obtain-token/", userLogin
			  );
			} catch (error) {
			  alert(error);
			}
		  };
	
		  const showLoginResponse = async () => {
			const data = Login()
			  .then(response => {
				token = response.data.token;
				JSONdata = JSON.stringify(response);
				JSONParsed = JSON.parse(JSONdata);
				const cookies = new Cookies();
				cookies.set('token', token, { path: '/login' });
				this.userdata(this.setState.token);
				
			  })
			  .catch(error => {
				alert("Logowanie nie powiodło się, wprowadź poprawne dane");
			  });
		  };
		  showLoginResponse();
		}
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
			</div>
		);
	}
}

export default Login;
