var React = require('react');
var axios = require('axios');
var DetailComponent = require('../components/DetailComponent');
require('../styles.css');

var ForecastComponent = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState() {
	    return {
	    	loading: true,
	        forecast: [],
	        country: '',
	        name: ''
	    };
	},

	componentWillMount() {
		var {location} = this.props.params;
		const endpoint = 'http://api.openweathermap.org/data/2.5/forecast?q=' + location + ',us&mode=json&appid=cf13f14bc03c9b0f73ff11397850293b'
		axios.get(endpoint).then(((info) => {
			var {list, city} = info.data;
			this.setState({
				loading: false,
				forecast: list,
				country: city.country,
				name: city.name,
				city: city

			})
		}).bind(this)).catch( (err) => {

		})
	},

	handleShowFull(weather) {
		this.context.router.push({
			pathname: '/details/' + this.state.name,
			state: {
				info: weather,
				city: this.state.name
			}
		})
	},

	render: function() {
		var details = this.state.loading === true
		? "loading"
		: this.state.forecast.map( (detail) => {
			return <DetailComponent handleShowFull={(this.handleShowFull).bind(null, detail)} name={this.state.name} country={this.state.country} info={detail} key={detail.dt} />
		})
		return (
			<div className="details">
				<h1 className="forecast-header">{this.state.name}</h1>
				<p className="select-date">Select a date</p>
				<div className="row brief-details">
					{details}
				</div>
			</div>
		);
	}

});

module.exports = ForecastComponent;