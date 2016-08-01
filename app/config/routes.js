import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainComponent from '../components/MainComponent';
import FormComponent from '../components/FormComponent';

var routes = (
	<Router>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={FormComponent} />
			<Route path="/search" component={FormComponent} />
		</Route>
	</Router>
);

export default routes;
