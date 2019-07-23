import React, { Component } from "react";
import axios from "axios";

class Data extends Component {
	state = {
		data: [],
	};
	componentDidMount() {
		return axios
			.get("https://jsonplaceholder.typicode.com/photos")
			.then(response => {
				this.setState({ data: response.data });
			})
			.catch(error => {
				alert(error);
			});
	}
	render() {
		return (
			<ul>
				<a href="https://via.placeholder.com/150/24f355" />

				{this.state.data.map(data => (
					<div key={data.id}>
						<li>{data.title}</li>
						<img src={data.thumbnailUrl} />
					</div>
				))}
			</ul>
		);
	}
}

export default Data;
