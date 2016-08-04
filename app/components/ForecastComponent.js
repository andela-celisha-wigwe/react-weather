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
	        error: false,
	        name: ''
	    };
	},

	componentWillReceiveProps(nextProps) {
		var {location} = nextProps.params;
		this.getData(location)
	},

	getData(location) {
		const endpoint = 'http://api.openweathermap.org/data/2.5/forecast?q=' + location + '&mode=json&appid=cf13f14bc03c9b0f73ff11397850293b'
		console.log(endpoint)
		axios.get(endpoint).then(((info) => {
			console.log(info)
			var {list, city} = info.data;
			this.setState({
				loading: false,
				forecast: list,
				country: city.country,
				name: city.name,
				error: false,
				city: city

			})
		}).bind(this)).catch( ( (err) => {
			console.log(err)
			this.setState({
				error: true,
				name: location
			})
		}).bind(this))
	},

	componentWillMount() {
		var {location} = this.props.params;
		this.getData(location)
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
		if (this.state.error) {
			return (
					<h3 className="forecast-header">
						There is no weather information about <strong><i>{this.state.name}</i></strong>
					</h3>
			)
		}
		var details = this.state.loading === true
		? <h1 className="forecast-header">Loading...</h1>
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