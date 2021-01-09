import React, { Component } from 'react';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

export default class ProductDetails extends Component {
	handleSave = () => {
		this.props.history.push('/products');
		this.props.history.replace('/products');
	};
	render() {
		return (
			<div>
				<h1>Product Details - {this.props.match.params.id}</h1>
				<button className="btn btn-danger" onClick={this.handleSave}>
					Save
				</button>
			</div>
		);
	}
}
