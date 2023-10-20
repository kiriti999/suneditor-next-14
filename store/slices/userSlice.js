
import { parseCookies } from "nookies";

const { token } = parseCookies();

const initialState = {
    userToken: token,
    userObject: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER':
            return { ...state, userToken: action.data };

        case 'UPDATE_USEROBJ':
            return { ...state, userObject: action.data };

        default:
            return state;
    }
}
