var React = require('react');
var ReactDOM = require('react-dom');

import routes from './config/routes';

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


const app = document.getElementById('app');
ReactDOM.render(routes, app);