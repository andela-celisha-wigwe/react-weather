var React = require('react');

var MainComponent = React.createClass({

	render: function() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}

});

module.exports = MainComponent;