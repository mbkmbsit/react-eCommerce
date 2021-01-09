import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import Counter from './counter';
import Cart from './cart';
class Products extends Component {
	render() {
		const {
			products,
			selectedProducts,
			onAdd,
			onIncrement,
			onDecrement,
			onDelete,
			isExist,
			totalPrice
		} = this.props;
		console.log(this.props);
		return (
			<div>
				products :{products.filter((c) => c.value > 0).length}
				<br />
				Total Price:{totalPrice}
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<Link to={'/products/' + product.id}>
								{product.name} : price:{product.price}
							</Link>
							<div className="col">
								<button
									onClick={() => {
										return onAdd(product);
									}}
									className="btn btn-primary btn-sm"
									disabled={isExist(product) ? 'disabled' : ''}
								>
									Add
								</button>
								<Counter
									key={product.id}
									counter={this.handleValue(product)}
									onIncrement={onIncrement}
									onDecrement={onDecrement}
									onDelete={onDelete}
								/>
							</div>
						</li>
					))}
				</ul>
				{selectedProducts ? (
					<Cart
						products={selectedProducts}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						onDelete={onDelete}
					/>
				) : (
					''
				)}
			</div>
		);
	}
	checkProduct(product) {
		const { selectedProducts } = this.props;
		const x = selectedProducts.find((item) => item.id === product.id);
		const index = selectedProducts.indexOf(x);
		if (index < 0) return false;
		return true;
	}
	handleValue(product) {
		console.log('handle Value:product', product);
		const products = [ ...this.props.selectedProducts ];
		const x = products.find((item) => item.id === product.id);
		console.log('handleValue :x', x);
		return x ? x : product;
	}
}
export default Products;
