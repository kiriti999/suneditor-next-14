/* eslint-disable default-param-last */

const initialState = {
	cartItems: [],
	discount: 0.0,
};

// COUNTER REDUCER
export const cartReducer = (state = initialState, action) => {
	let liveData = {};
	let courseData = {};
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
				if (action.data.live_training_price) {
					liveData = {...action.data};
					liveData.id = `live_${liveData.id}`
					liveData.purchaseType = 'Live training'
					liveData.price = action.data.live_training_price;
				}
				if (action.data.video_course_price) {
					courseData = {...action.data}
					courseData.id = `course_${courseData.id}`;
					courseData.purchaseType = 'Course videos'
					courseData.price = action.data.video_course_price;
				}
				return {
					...state,
					cartItems: [...state.cartItems, courseData, liveData],
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
