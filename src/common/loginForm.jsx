import React, { Component } from 'react';
import Input from './input';

export default class LoginForm extends Component {
	// username = React.createRef();
	// //use only in case 3rd party animations, custom libs
	// password = React.createRef();
	state = {
		account: { username: '', password: '' },
		errors: {}
	};
	componentDidMount() {
		// this.username.current.focus();
	}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		// document.getElementById('username').value same as this:
		// console.log(this.username.current.value);
		const errors = this.validate();
		this.setState({ errors });
		if (errors) return;
	};
	validate = () => {};
	// handleChange = (e) => {
	// 	console.log(e);
	// 	const account = { ...this.state.account };
	// 	account.username = e.currentTarget.value;
	// 	console.log(e.currentTarget.id);
	// 	this.setState({ account });
	// };
	handleChange = ({ currentTarget: input }) => {
		console.log(input);
		console.log(input.id);
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};

	render() {
		let { account } = this.state;
		return (
			<div>
				<div>Login</div>
				<form>
					<div className="form-group">
						<label htmlFor="username">Username or Email address</label>
						<input
							type="email"
							autoFocus
							className="form-control"
							id="username"
							// ref={this.username}
							// by doing controlled element with value and onChange avoid ref
							value={account.username}
							onChange={this.handleChange}
							name="username"
							//
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<Input
						label="Password"
						name="password"
						value={account.password}
						onChange={this.handleChange}
						type="password"
					/>
					<div className="form-group form-check">
						<input type="checkbox" className="form-check-input" id="exampleCheck1" />
						<label className="form-check-label" htmlFor="exampleCheck1">
							Stay signed In
						</label>
					</div>
					<button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}
