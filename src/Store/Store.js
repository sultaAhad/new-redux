import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CounterReducer from "../Service/Counterreducer";
const reducers = combineReducers({
	CounterReducer,
});
const store = configureStore({
	reducer: reducers,
});
export default store;
