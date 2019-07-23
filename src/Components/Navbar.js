import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="nav-wrapper green darken-2">
			<div className="container">
				<Link className="brand-logo" to="/">
					Florater
				</Link>
				<ul className="right">
					<li>
						<NavLink exact to="/">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/register">Register</NavLink>
					</li>
					<li>
						<NavLink to="/login">Login</NavLink>
					</li>
					<li>
						<NavLink to="/data">DATA</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Navbar);
