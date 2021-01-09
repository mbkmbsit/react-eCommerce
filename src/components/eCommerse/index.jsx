import React, { Component } from 'react';
import Routes from './routes';
import { getProducts } from '../../services/getProducts';

export default class Index extends Component {
	state = {
		account: { username: '', password: '', name: '', email: '', age: '', gender: '', address: '' },
		errors: {},
		products: [],
		selectedProducts: [],
		totalPrice: 0
	};
	componentDidMount() {
		this.setState({ products: [ ...getProducts() ] });
	}
	onAdd = (product) => {
		const x = { ...product };
		x.value = 1;
		this.setState({ selectedProducts: [ ...this.state.selectedProducts, { ...x } ] });
		const { totalPrice: total } = this.state;
		this.setState({ totalPrice: total + product.price });
		// this.handlePrice(1);
	};
	onIncrement = (product) => {
		const products = [ ...this.state.selectedProducts ];
		const x = products.find((item) => item.id === product.id);
		index = products.indexOf(x);
		products[index] = { ...x };
		products[index].value++;
		this.setState({ selectedProducts: products });
		const { totalPrice: total } = this.state;
		if (x) this.setState({ totalPrice: total + product.price });
	};
	onDecrement = (product) => {
		const products = [ ...this.state.selectedProducts ];
		products[index] = { ...product };
		products[index].value--;
		this.setState({ selectedProducts: products });
		const { totalPrice: total } = this.state;
		this.setState({ totalPrice: total - product.price });
	};
	onDelete = (productId) => {
		const { selectedProducts, totalPrice: total } = this.state;
		const x = selectedProducts.find((item) => item.id === productId);
		if (x) this.setState({ totalPrice: total - x.price * x.value });
		const newProducts = selectedProducts.filter((c) => c.id !== productId);
		this.setState({ selectedProducts: newProducts });
	};
	isExist = (product) => {
		const products = [ ...this.state.selectedProducts ];
		let index = products.indexOf(product);
		const x = products.find((item) => item.id === product.id);
		const xi = products.indexOf(x);
		index = products.indexOf(x);
		if (index < 0) return false;
		return true;
	};
	handlePrice = (xz) => {
		let { totalPrice: total, selectedProducts } = this.state;
		const x = selectedProducts
			? selectedProducts.map((product) => {
					total = total + product.value * product.price;
				})
			: 0;
		this.setState({ totalPrice: total });
	};

	render() {
		const { account, products, selectedProducts, totalPrice, handlePrice } = this.state;
		return (
			<div>
				{handlePrice}
				<main className="container">
					<Routes
						account={account}
						selectedProducts={selectedProducts}
						products={products}
						onAdd={this.onAdd}
						onIncrement={this.onIncrement}
						onDecrement={this.onDecrement}
						onDelete={this.onDelete}
						isExist={this.isExist}
						totalPrice={totalPrice}
					/>
				</main>
			</div>
		);
	}
}
