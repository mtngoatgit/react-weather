import React from 'react';
import City from './Location.js';

const citylist = ["Chicago", "Orem", "New York", "Brisbane", "Detroit", "Las Vegas", "Seattle", "Philadelphia"]
//WEATHER COMPONENT
export default React.createClass({
	getInitialState() {
		return {
			cityInput: "",
			cityList: []
		}
	},
	render() {
		return (
			<div>
				<input
					placeholder="name your city"
					value={this.state.cityInput}
					onChange={this.handleChange}
					onKeyDown={this.handleInput}
				/>
					{this.state.cityList.map((inputData, index) => {
						return <City key={index} city={inputData} />
					})}
			<select onChange={e => this.setState({cityList: this.state.cityList.concat([e.target.value])})}>
				{citylist
					.filter((city) => {
						return this.state.cityList.indexOf(city) === -1;
					})
					.map((city) => {
						return <option key={city} value={city}>{city}</option>
					})}
			</select>
			</div>
		)
	},
	handleChange(e) {
		this.setState({
			cityInput: e.target.value,
		});
	},
	handleInput(e) {
		if (e.keyCode === 13) {
			this.setState({
				cityList: this.state.cityList.concat([this.state.cityInput]),
				cityInput: "",
			})
		}
	}
});
