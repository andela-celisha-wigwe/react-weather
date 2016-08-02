// Weather
// Wednesday, Aug 3
// Lagos
// broken clouds
// min temp: 77 degrees
// max temp: 77 degrees
// humidity: 100


var React = require('react');

var DetailsComponent = React.createClass({

	getInitialState() {
	    return {
	          weather: {},
	          city: '',
	          main: {},
	          loading: true
	    };
	},

	componentWillMount() {
		var {info, city} = this.props.location.state
		var {weather, main} = info
		this.setState({
	    	weather: weather,
	    	main: main,
	    	city: city
	    })  
	},

	render: function() {
		var {weather, city, main} = this.state
		var weather = weather[0]
		return (
			<div>
				<div className="full-details-head">
					<img src={"http://openweathermap.org/img/w/" + weather.icon + ".png"} alt={weather.description} title={weather.description} className="center-block img-responsive" />
					<h2></h2>
				</div>
				<div className="full-details-bottom">
					<p>{city}</p>
					<p>{weather.description}</p>
					<p>
						<span>min temp: </span>  <span>{main.temp_min}</span>  <span> degrees</span>
					</p>
					<p>
						<span>max temp: </span>  <span>{main.temp_max}</span>  <span> degrees</span>
					</p>
					<p>
						<span>humidity: </span>  <span>{main.humidity}</span>
					</p>
				</div>
			</div>
		);
	}

});

module.exports = DetailsComponent;