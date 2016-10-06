import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather/Weather.js';

var App = React.createClass({
	render(){
		return (
			<div>
        <Weather />
			</div>
		)
	}
})

ReactDOM.render(<App />, document.getElementById('app'));
