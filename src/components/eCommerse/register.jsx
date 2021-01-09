import React, { Component } from 'react';
import Input from '../../common/input';
export default class Register extends Component {
	state = {
		account: { username: '', password: '', name: '', email: '', age: '', gender: '', address: '' },
		errors: {}
	};
	componentDidMount() {}
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const errors = this.validate();
		this.setState({ errors });
		if (errors) return;
	};
	validate = () => {};
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
					<Input
						label="Username"
						name="username"
						value={account.username}
						onChange={this.handleChange}
						type="username"
						autoFocus
					/>
					<Input label="Name" name="name" value={account.name} onChange={this.handleChange} type="text" />
					<Input label="Email" name="email" value={account.email} onChange={this.handleChange} type="email" />
					<Input label="Age" name="age" value={account.age} onChange={this.handleChange} type="age" />
					<Input
						label="Gender"
						name="gender"
						value={account.gender}
						onChange={this.handleChange}
						type="text"
					/>
					<Input label="Email" name="email" value={account.email} onChange={this.handleChange} type="email" />
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
