import React from 'react';

const Input = ({ name, label, value, onChange, type }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				className="form-control"
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={name}
			/>
		</div>
	);
};

export default Input;
