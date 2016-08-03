var React = require('react');
import FormComponent from "./FormComponent";

var HomeComponent = React.createClass({

	render: function() {
		var style = {
			backgroundSize: 'cover',
    		backgroundImage: "url('app/img/pattern.svg')"
		}
		return (
			<div className="home" style={style}>
				<h1 className="header">
					Enter a City and State
				</h1>

				<div className="form">
					<FormComponent />
				</div>
			</div>
		);
	}

});

module.exports = HomeComponent;