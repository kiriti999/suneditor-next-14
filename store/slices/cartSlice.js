/* eslint-disable default-param-last */

const initialState = {
	cartItems: [],
	discount: 0.0,
};

// COUNTER REDUCER
export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			let existingItem = state.cartItems.find(
				(course) => action.data.id === course._id
			);
			if (existingItem) {
				existingItem.quantity += 1;
				return {
					...state,
				};
			} else {
				return {
					...state,
					cartItems: [...state.cartItems, action.data],
				};
			}

		case "GET_DISCOUNT":
			return {
				...state,
				discount: action.data,
			};

		case "REMOVE_CART":
			let new_items = state.cartItems.filter(
				(item) => action.id !== item.id
			);
			return {
				...state,
				cartItems: new_items,
			};
		case "RESET_CART":
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};
