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
		var {dt_txt, weather} = this.props.info;
		var weather = weather[0];
		return (
			<div className="col-sm-6 col-md-4" onClick={this.props.handleShowFull}>
				<div className="thumbnail detail">
					<img src={"http://openweathermap.org/img/w/" + weather.icon + ".png"} alt={weather.description} title={weather.description} className="center-block img-responsive" />
					<div className="caption">
						{this.state.day}, {this.state.month} {this.state.date.getDay()}, {this.state.date.getFullYear()}
						<p>{weather.description}</p>
					</div>
				</div>
			</div>

		);
	}

});

module.exports = DetailComponent;