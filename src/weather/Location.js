import React from 'react';
import axios from 'axios';

export default React.createClass({
	getInitialState() {
		return {
			date: null,
			temp: null,
			tempMin: null,
			tempMax: null,
			weatherMain: null,
			weatherDesc: null,
		}
	},
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.temp !== nextState.temp;
		return this.state.weather !== nextState.weather;
	},
	componentWillMount() {
		axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=imperial&APPID=8d6d3d96f61b617556cbc73957e7ae65`)
			.then(result => {
				this.setState({
					date: result.data.list[0].dt,
					temp: result.data.list[0].main.temp,
					tempMin: result.data.list[0].main.temp_min,
					tempMax: result.data.list[0].main.temp_max,
					weatherMain: result.data.list[0].weather[0].main,
					weatherDesc: result.data.list[0].weather[0].description,
				});
			})
	},
	render() {
		console.log("render", this.props.city);
		// I need to do a .map in this section
		return (
			<div>
				<h3>{this.props.city}</h3>
				Date: {this.state.date}
				Current Temperature:{this.state.temp && <h4>{this.state.temp}&deg; F</h4>}
				Low: {this.state.tempMin}
				High: {this.state.tempMax}
				Weather: {this.state.weatherMain}
				Weather More: {this.state.weatherDesc}
			</div>
		)
	}
});
