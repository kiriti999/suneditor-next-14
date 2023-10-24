/* eslint-disable default-param-last */
import { parseCookies } from "nookies";
import axios from 'axios';
import { axiosApi } from "../../utils/baseUrl";

const localCart = typeof localStorage !== 'undefined' ? localStorage.getItem('cart') : null;
const initialState = localCart ? JSON.parse(localCart) : {
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
			newActionData['purchaseType'] = idType;
			if (idType === 'live') {
				newActionData.price = newActionData[price];
				delete newActionData.video_course_price;
			}
			if (idType === 'course') {
				newActionData.price = newActionData[price];
				delete newActionData.live_training_price;
			}
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

	const updateCart = async (details) => {
		const { token } = parseCookies();
		const cartId = localStorage.getItem('cart-id');
		const { cartItems, discount } = details;
		if (cartId && token) {
			const url = `${axiosApi.baseUrl}/api/v1/cart/${cartId}`;
			await axios.post(url, { cartItems, discount }, {
				headers: { Authorization: token }
			});
		}
	}

	switch (action.type) {
		case "UPDATE_CART":
			const updateState = {
				...state,
				cartItems: action.data.cartItems,
				discount: action.data.discount
			};

			localStorage.setItem('cart', JSON.stringify(updateState));
			return updateState;

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
				localStorage.setItem('cart', JSON.stringify(newState));
				updateCart(newState);

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
			const newState = {
				...state,
				cartItems: new_items
			};
			localStorage.setItem('cart', JSON.stringify(newState));
			updateCart(newState);

			return newState;

		case "RESET_CART":
			localStorage.removeItem('cart');
			updateCart({ cartItems: [], discount: 0 });
			return {
				...state,
				cartItems: [],
			};
		default:
			return state;
	}
};
