var React = require('react');
import {Link} from 'react-router';

var DetailComponent = React.createClass({

	propTypes: {
	    info: React.PropTypes.object.isRequired
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
	    return {
	    	date: null,
	    	full: false
	    };
	},

	componentWillMount() {

		var date = new Date(this.props.info.dt_txt)
		this.setState({
			date: date,
			month: date.getMonthName(),
			day: date.getDayName(),
			year: date.getYear(),

		})
	},

	render: function() {
		var {dt_txt, weather, city} = this.props.info;
		var weather = weather[0];
		return (
			<div className="col-sm-6 col-md-3 each-detail" onClick={this.props.handleShowFull}>
				<h1>{city}</h1>
				<img src={"http://openweathermap.org/img/w/" + weather.icon + ".png"} alt={weather.description} title={weather.description} className="center-block img-responsive" />

				<h2>
					{this.state.day}, {this.state.month} {this.state.date.getDay()}.
					<p>{weather.description}</p>
				</h2>
			</div>

		);
	}

});

module.exports = DetailComponent;