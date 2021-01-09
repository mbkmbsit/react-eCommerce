import React from 'react';
import Counter from './counter';
import { Link } from 'react-router-dom';
const Cart = ({ selectedProducts, onIncrement, onDecrement, onDelete, totalPrice }) => {
	return (
		<div>
			Total Price:{totalPrice}
			<ul>
				{selectedProducts ? (
					selectedProducts.map((product) => (
						<li key={product.id}>
							<Link to={'/products/' + product.id}>{product.name}</Link>
							{/* <ProductDetails /> */}
							<div className="col">
								<Counter
									key={product.id}
									counter={product}
									onIncrement={onIncrement}
									onDecrement={onDecrement}
									onDelete={onDelete}
								/>
							</div>
						</li>
					))
				) : (
					''
				)}
			</ul>
		</div>
	);
};

export default Cart;
