/* eslint-disable default-param-last */

const initialState = {
	cartItems: [],
	discount: 0.0,
};

// COUNTER REDUCER
export const cartReducer = (state = initialState, action) => {
	console.log('action.data: ', action.data);

	const isItemExistInCart = (id) => {
		const result = state.cartItems.some((item) => item.id === id)
		return result;
	}

	const createActionData = (action, price, cartState, idType) => {
		const newActionData = { ...action.data };
		if (price > 0 && !(isItemExistInCart(`${idType}_${action.data.id}`))) {
			newActionData.id = `${idType}_${newActionData.id}`;
			newActionData.price = newActionData[price];
			newActionData['purchaseType'] = idType;
		}
		cartState.cartItems.push(newActionData)
	}

	const getBothTypesActionData = (action, price, cartState) => {
		const types = ['live', 'course'];
		for (let index = 0; index < types.length; index++) {
			const idType = types[index];
			createActionData(action, price[index], cartState, idType);
		}
	}

	const getCourseType = (action, price, cartState, idType = null, selected = null) => {
		const selectedType = {
			liveType: createActionData,
			courseType: createActionData,
			both: getBothTypesActionData
		}
		selectedType[selected](action, price, cartState, idType);

	}
	switch (action.type) {
		case "ADD_TO_CART":
			let existingItem = state.cartItems.find(
				(course) => action.data.id === course._id
			);
			if (existingItem) {
				existingItem.quantity += 1;
				return { ...state };
			} else {
				const newState = {
					...state,
					cartItems: [...state.cartItems],
				}

				let { live_training_price, video_course_price } = action.data;

				if (action.data?.selected === 'liveType') {
					getCourseType(action, live_training_price, newState, 'live', action.data.selected);
				} else if (action.data?.selected === 'courseType') {
					getCourseType(action, video_course_price, newState, 'course', action.data.selected);
				} else if (action.data?.selected === 'both') {
					getCourseType(action, [live_training_price, video_course_price], newState, null, action.data.selected);
				}

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
