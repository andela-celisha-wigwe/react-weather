import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import MainComponent from '../components/MainComponent';
import FormComponent from '../components/FormComponent';
import ForecastComponent from '../components/ForecastComponent';
import DetailsComponent from '../components/DetailsComponent';

var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={MainComponent}>
			<IndexRoute component={FormComponent} />
			<Route path="/forecast/(:location)" component={ForecastComponent} />
			<Route name="full_details" path="/details/(:location)" component={DetailsComponent} />
		</Route>
	</Router>
);

export default routes;
