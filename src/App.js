import React from "react";
import Navbar from "./Components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

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
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
