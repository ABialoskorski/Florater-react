import React from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import Data from "./Components/Data";
import Type from "./Components/Type";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="App">
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/data" component={Data} />
						<Route exact path="/type" component={Type} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
