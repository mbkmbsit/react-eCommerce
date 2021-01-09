import React from 'react';
import { NavLink } from 'react-router-dom';
// import './navbar.module.css';
const Navbar = () => {
	return (
		<div>
			<ul className="nav nav-tabs">
				<li className="nav-item">
					<NavLink className="nav-link" to="/">
						Home
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/products">
						Products
					</NavLink>
				</li>

				<li className="nav-item">
					<NavLink className="nav-link" to="/register">
						Register
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/cart">
						Cart
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/checkout">
						Checkout
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
