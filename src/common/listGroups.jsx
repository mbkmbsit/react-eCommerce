import React from 'react';

const ListGroup = ({ items, onItemSelect, textProperty, valueProperty, selectedItem }) => {
	console.log(items);
	if (!items) return null;
	return (
		<div style={{ cursor: 'pointer' }}>
			<ul className="list-group">
				{items.map((item) => (
					<li
						key={item[valueProperty]}
						onClick={() => onItemSelect(item)}
						className={item === selectedItem ? 'list-group-item active' : 'list-group-item'}
					>
						{item[textProperty]}
					</li>
				))}
			</ul>
		</div>
	);
};
ListGroup.defaultProps = {
	textProperty: 'name',
	valueProperty: '_id'
};

export default ListGroup;
