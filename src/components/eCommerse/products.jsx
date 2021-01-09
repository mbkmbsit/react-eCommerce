import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import ProductDetails from './productDetails';
import { getProducts } from '../../services/getProducts';
import Counter from './counter';
import Cart from './cart';
class Products extends Component {
	state = {
		products: [],
		selectedProducts: []
	};
	componentDidMount() {
		this.setState({ products: [ ...getProducts() ] });
	}
	onAdd = (product) => {
		this.setState({ selectedProducts: [ ...this.state.selectedProducts, { ...product } ] });
	};
	onIncrement = (product) => {
		const products = [ ...this.state.selectedProducts ];
		let index = products.indexOf(product);
		const x = products.find((item) => item.id === product.id);
		index = products.indexOf(x);
		products[index] = { ...x };
		products[index].value++;
		this.setState({ selectedProducts: products });
	};
	onDecrement = (product) => {
		const products = [ ...this.state.selectedProducts ];
		const index = products.indexOf(product);
		products[index] = { ...product };
		products[index].value--;
		this.setState({ selectedProducts: products });
	};
	onDelete = (productId) => {
		const { selectedProducts } = this.state;
		const newProducts = selectedProducts.filter((c) => c.id !== productId);
		this.setState({ selectedProducts: newProducts });
	};
	isExist = (product) => {
		const products = [ ...this.state.selectedProducts ];
		let index = products.indexOf(product);
		const x = products.find((item) => item.id === product.id);
		index = products.indexOf(x);
		if (index < 0) return false;
		return true;
	};
	render() {
		const { products, selectedProducts } = this.state;
		return (
			<div>
				products :{products.filter((c) => c.value > 0).length}
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<Link to={'/products/' + product.id}>{product.name}</Link>
							<div className="col">
								<button
									onClick={() => this.onAdd(product)}
									className="btn btn-primary btn-sm"
									disabled={this.isExist(product) ? 'disabled' : ''}
								>
									Add
								</button>
								<Counter
									key={product.id}
									counter={this.handleValue(product)}
									onIncrement={this.onIncrement}
									onDecrement={this.onDecrement}
									onDelete={this.onDelete}
								/>
							</div>
						</li>
					))}
				</ul>
				{selectedProducts ? (
					<Cart
						products={selectedProducts}
						onIncrement={this.onIncrement}
						onDecrement={this.onDecrement}
						onDelete={this.onDelete}
					/>
				) : (
					''
				)}
			</div>
		);
	}
	checkProduct(product) {
		const { selectedProducts } = this.state;
		const x = selectedProducts.find((item) => item.id === product.id);
		const index = selectedProducts.indexOf(x);
		if (index < 0) return false;
		return true;
	}
	handleValue(product) {
		const products = [ ...this.state.selectedProducts ];
		const x = products.find((item) => item.id === product.id);
		const index = products.indexOf(x);
		return index > 0 ? x : product;
	}
}
export default Products;
