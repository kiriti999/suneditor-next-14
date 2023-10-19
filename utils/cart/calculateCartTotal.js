export const calculateCartTotal = (courses) => {
	const total = courses.reduce((acc, el) => {
		acc += el.total_cost * el.quantity;
		return acc;
	}, 0);

	const cartTotal = ((total * 100) / 100).toFixed(0);
	const stripeTotal = Number((total * 100).toFixed(0));

	return { cartTotal, stripeTotal };
};

export const calculateCartTotalMinus = (courses) => {
	const total = courses.reduce((acc, el) => {
		acc += el.regular_price * el.quantity;
		return acc;
	}, 0);

	const cartTotalMinus = ((total * 100) / 100).toFixed(2);

	return { cartTotalMinus };
};
