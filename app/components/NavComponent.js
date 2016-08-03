var React = require('react');
var FormComponent = require('./FormComponent');

var NavComponent = React.createClass({

	render: function() {
		return (

			<div className="navbar navbar-default navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">WeatherApp</a>
					</div>

				<center>
					<div className="navbar-collapse collapse navform" id="navbar-main">
						<FormComponent />
					</div>
				</center>

				</div>
			</div>
		);
	}

});

module.exports = NavComponent;