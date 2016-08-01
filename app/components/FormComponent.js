var React = require('react');

var FormComponent = React.createClass({

	getInitialState() {
	    return {
	        query: ''  
	    };
	},

	componentDidMount() {
	      
	},

	handleSubmitSearch(e) {
		e.preventDefault();
		// POST THE STRING TO THE WEATHER API TO GET THE DETAILS OF THE WEATHER AT THE QUERIES CITY.
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
			<div className="col-sm-12 text-center">
				<form className="form-inline" onSubmit={this.handleSubmitSearch}>
					<div className="form-group">
						<input onChange={this.updateSearch} type="search" className="form-control" placeholder="France, Lagos, India" />
					</div>
					<div>
						<button type="submit" className="btn btn-success">Search</button>
					</div>
				</form>
			</div>
		);
	}

});

module.exports = FormComponent;