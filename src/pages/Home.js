import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../Service/Actions/Index";

const Home = () => {
	const counter = useSelector((state) => state.CounterReducer.counter);
	const dispatch = useDispatch();
	const incFunc = () => {
		const finalIncremantedVal = counter + 1;
		dispatch({ type: INCREMENT, payload: finalIncremantedVal });
		console.log(finalIncremantedVal);
	};
	const decFunc = () => {
		const finaldecremantedVal = counter - 1;
		dispatch({ type: DECREMENT, payload: finaldecremantedVal });
	};

	// es6 es7 js oop

	return (
		<>
			<div>
				<button onClick={() => incFunc()}>
					<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
				</button>
				<h4>{counter}</h4>
				<button
					onClick={() => {
						decFunc();
					}}
				>
					<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
				</button>
			</div>
		</>
	);
};

export default Home;
