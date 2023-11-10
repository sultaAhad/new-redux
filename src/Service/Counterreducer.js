import { DECREMENT, INCREMENT } from "../Service/Actions/Index";

const initialState = {
	counter: 10,
};

const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				counter: action.payload,
			};
		case DECREMENT:
			return {
				counter: action.payload,
			};
		default:
			return state;

			break;
	}
};
export default CounterReducer;
