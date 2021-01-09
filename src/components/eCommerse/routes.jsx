// import { Link } from 'react-router-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import Cart from './cart';
import Checkout from './checkout';
import Login from './login';
import Register from './register';

import Products from './products';
import ProductDetails from './productDetails';

import NotFound from './notFound';

const Routing = ({ products, selectedProducts, onAdd, onIncrement, onDecrement, onDelete, isExist, totalPrice }) => {
	return (
		<Router>
			<Navbar selectedProducts={selectedProducts} />
			<Switch>
				<Route
					path="/products"
					exact
					render={(props) => (
						<Products
							sortBy="newest"
							selectedProducts={selectedProducts}
							products={products}
							onAdd={onAdd}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
							isExist={isExist}
							totalPrice={totalPrice}
							{...props}
						/>
					)}
				/>
				<Route path="/products/:id?" render={(props) => <ProductDetails sortBy="newest" {...props} />} />

				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route
					path="/cart"
					render={(props) => (
						<Cart
							sortBy="newest"
							selectedProducts={selectedProducts}
							products={products}
							onAdd={onAdd}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							onDelete={onDelete}
							isExist={isExist}
							{...props}
						/>
					)}
				/>
				<Route path="/checkout" component={Checkout} />
				<Route path="/" exact component={Home} />
				<Route path="/not-found" component={NotFound} />
				<Redirect to="/not-found" />
			</Switch>
		</Router>
	);
};
export default Routing;
