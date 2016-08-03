var React = require('react');

function TextComponent(props) {
	return (
		<input onChange={(props.updateSearch)} type="search" className="form-control" placeholder="France, Lagos, Ghana" />
	);
}

function ButtonComponent(props) {
	return (
		<button type="submit" style={{margin:"10px"}} className="btn btn-success">Search</button>
	);
}

module.exports = {
	TextComponent: TextComponent,
	ButtonComponent: ButtonComponent
}