var React = require('react');
var NavComponent = require('./NavComponent');

var MainComponent = React.createClass({

	render: function() {
		return (
			<div className="main-component">
				<NavComponent />
				{this.props.children}
			</div>
		);
	}

});

module.exports = MainComponent;