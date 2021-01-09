import React, { Component, Fragment } from 'react';
import _ from 'lodash';
export default class TableBody extends Component {
	renderCell = (item, column) => {
		if (column.content) return column.content(item);
		return _.get(item, column.fieldName);
	};
	createKey = (item, column) => {
		return item._id + (column.fieldName || column.key);
	};
	render() {
		const { data, columns } = this.props;
		return (
			<Fragment>
				<tbody>
					{data.map((item) => (
						<tr key={item._id}>
							{columns.map((column) => (
								<td key={this.createKey(item, column)}>{this.renderCell(item, column)}</td>
							))}
						</tr>
					))}
				</tbody>
			</Fragment>
		);
	}
}
