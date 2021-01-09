import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: this.props.counter.value
	};
	styles = {
		fontSize: 20,
		fontWeight: 'bold'
	};

	render() {
		let classes = this.getBadgeClasses();
		console.log('props :>> ', this.props);
		console.log('props value: ', this.props.value);

		const { onIncrement, onDecrement, onDelete, counter, onAdd, children } = this.props;
		return (
			<div>
				{children}
				<div className="row">
					<div className="col-1">
						<span className={classes}>{this.formatCount()}</span>
					</div>
					<br />
					<div className="col">
						<button onClick={() => onIncrement(counter)} className="btn btn-primary btn-sm">
							Increment
						</button>
						<button
							onClick={() => onDecrement(counter)}
							className="btn btn-primary btn-sm m-2"
							disabled={counter.value === 0 ? 'disabled' : ''}
						>
							Decrement
						</button>
						<button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm">
							Delete
						</button>
					</div>
				</div>

				<h1>-------------</h1>
			</div>
		);
	}
	getBadgeClasses() {
		let classes = 'badge badge-pill  m-2 badge-';
		classes += this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { value: count } = this.props.counter;
		return count === 0 ? <h4>zero</h4> : count;
	}
}

export default Counter;
