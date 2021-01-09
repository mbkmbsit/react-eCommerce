const products = [
	{
		id: 1,
		name: 'product 1',
		description: 'this is product 1',
		price: 1200,
		rating: 3,
		value: 0
	},
	{
		id: 2,
		name: 'product 2',
		description: 'this is product 2',
		price: 1207,
		rating: 4,
		value: 0
	},
	{
		id: 3,
		name: 'product 3',
		description: 'this is product 3',
		price: 1250,
		rating: 2,
		value: 0
	}
];

export function getProducts() {
	return products;
}
