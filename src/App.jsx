import React, { Component, Fragment } from 'react';
import Routing from './components/routing';
import Ecommerce from './components/eCommerse';
export default class App extends Component {
	render() {
		return (
			<Fragment>	
				<Ecommerce />
			</Fragment>
		);
	}
}
