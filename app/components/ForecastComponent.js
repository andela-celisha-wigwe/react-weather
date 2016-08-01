var React = require('react');
var axios = require('axios');
var DetailComponent = require('../components/DetailComponent');
require('../styles.css');

Date.prototype.names = {

	months: [
	    "January", "February", "March", "April",
	    "May", "June", "July", "August",
	    "September", "October", "November", "December"
	],

    days: [
    	"Sunday", "Monday", "Tuesday", "Wednesday",
    	"Thursday", "Friday", "Saturday"
    ]
};

Date.prototype.monthNames = [
    "January", "February", "March",
    "April", "May", "June",
    "July", "August", "September",
    "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.names.months[this.getMonth()];
};

Date.prototype.getDayName = function() {
    return this.names.days[this.getDay()];
};

Date.prototype.getShortDayName = function () {
    return this.getDayName().substr(0, 3);
};

Date.prototype.getShortMonthName = function () {
    return this.getMonthName().substr(0, 3);
};

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
				name: city.name

			})
		}).bind(this)).catch( (err) => {

		})
	},

	render: function() {
		var details = this.state.loading === true
		? "loading"
		: this.state.forecast.map( (detail) => {
			return <DetailComponent location={location} info={detail} key={detail.dt} />
		})
		return (
			<div className="row details">
				{details}
			</div>
		);
	}

});

module.exports = ForecastComponent;