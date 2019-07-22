import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
	state = {};
	render() {
		return (
			<div className="Home">
				<h2>Witaj we FloraTer</h2>
				<p>
					FloraTer jest programem umożliwiającym cyfrowe wykonywanie
					spisów florystycznych w terenie,
					<br />
					przesyłanie, przechowywanie i analizę zebranych danych.
				</p>
			</div>
		);
	}
}

export default Home;
