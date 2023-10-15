/* eslint-disable default-param-last */

const initialState = {
	cartItems: [],
	discount: 0.0,
};

// COUNTER REDUCER
export const cartReducer = (state = initialState, action) => {
	console.log('action.data: ', action.data);
	let liveData = {};
	let courseData = {};

	const isItemExistInCart = (id) => {
		console.log('isItemExistInCart id: ', id);
		const result = state.cartItems.some((item) => item.id === id)
		console.log('result ', result);
		return result;
	}

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

				const newState = {
					...state,
					cartItems: [...state.cartItems],
				}

				if (action.data.selected === 'liveType' && !(isItemExistInCart(`live_${action.data.id}`))) {
					liveData = { ...action.data };
					liveData.id = `live_${liveData.id}`
					liveData.purchaseType = 'Live training'
					liveData.price = action.data.live_training_price;
					newState.cartItems.push(liveData)
				} else if (action.data.selected === 'courseType' && !(isItemExistInCart(`course_${action.data.id}`))) {
					courseData = { ...action.data }
					courseData.id = `course_${courseData.id}`;
					courseData.purchaseType = 'Course videos'
					courseData.price = action.data.video_course_price;
					newState.cartItems.push(courseData)
				} else {
					if (!(isItemExistInCart(`live_${action.data.id}`))) {
						liveData = { ...action.data };
						liveData.id = `live_${liveData.id}`
						liveData.purchaseType = 'Live training'
						liveData.price = action.data.live_training_price;
						newState.cartItems.push(liveData)
					}

					if (!(isItemExistInCart(`course_${action.data.id}`))) {
						courseData = { ...action.data }
						courseData.id = `course_${courseData.id}`;
						courseData.purchaseType = 'Course videos'
						courseData.price = action.data.video_course_price;
						newState.cartItems.push(courseData)
					}
				}

				console.log('liveData', liveData);
				console.log('courseData', courseData);
				console.log('newState ', newState);
				return newState;
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
