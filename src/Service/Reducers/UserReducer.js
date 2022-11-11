import { GET_USER_REQUEST, GET_USER_SECCESS, GET_USER_FAIL } from "../Constant";
export const UserReducer = (state = { users: [] }, action) => {
	switch (action.type) {
		case GET_USER_REQUEST:
			return { loading: true, users: [] };
			break;
		case GET_USER_SECCESS:
			return { loading: false, users: action.payload };
			break;
		case GET_USER_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};
