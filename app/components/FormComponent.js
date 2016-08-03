var React = require('react');
import UIComponents from "./UIComponents";
var {ButtonComponent, TextComponent} = UIComponents;

var FormComponent = React.createClass({

	getInitialState() {
	    return {
	        query: ''  
	    };
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentDidMount() {
	      
	},

	handleSubmitSearch(e) {
		e.preventDefault();
		this.context.router.push({
			pathname: '/forecast/' + this.state.query,
		});
	},

	componentWillUnmount() {
	      
	},

	updateSearch(e) {
		this.setState({
			query: e.target.value
		});
	},

	render: function() {
		return (
				<form className="navbar-form navbar-right" onSubmit={this.handleSubmitSearch} role="search">
					<div className="form-group">
						<TextComponent updateSearch={this.updateSearch} />
					</div>
					<ButtonComponent />
				</form>
		);
	}

});

module.exports = FormComponent;