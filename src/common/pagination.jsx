import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
	const pageCount = Math.ceil(itemCount / pageSize);
	if (pageCount === 1) return null;
	let pages = _.range(1, pageCount + 1);
	pages = pages.map((page) => {
		return (
			<li className={page === currentPage ? 'page-item active' : 'page-item'} key={page}>
				<a className="page-link" onClick={() => onPageChange(page)}>
					{page}
				</a>
			</li>
		);
	});
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">{pages}</ul>
		</nav>
	);
};

Pagination.propTypes = {
	itemCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired
};

export default Pagination;
