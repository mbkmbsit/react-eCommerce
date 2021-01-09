import React, { Component } from 'react';
import Routes from './routes';
export default class Index extends Component {
	state = {
		account: { username: '', password: '', name: '', email: '', age: '', gender: '', address: '' },
		errors: {}
	};
	render() {
		return (
			<div>
				<main className="container">
					<Routes />
				</main>
			</div>
		);
	}
}
