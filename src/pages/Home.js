import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../Service/Actions/Index";
import User from "../Component/User";
import style from "../Assets/style.css";

const Home = () => {
	const counter = useSelector((state) => state.CounterReducer.counter);
	const dispatch = useDispatch();
	const incFunc = () => {
		const finalIncremantedVal = counter + 1;
		dispatch({ type: INCREMENT, payload: finalIncremantedVal });
		console.warn(finalIncremantedVal);
	};
	const decFunc = () => {
		const finaldecremantedVal = counter - 1;
		dispatch({ type: DECREMENT, payload: finaldecremantedVal });
	};
	// es6 es7 js oop
	const [items, setitems] = useState("");
	const [list, setlist] = useState([]);

	const handleChange = (event) => {
		setitems(event.target.value);
	};
	const handlelist = () => {
		setlist((oldarrey) => {
			return [...oldarrey, items];
		});
		setitems("");
	};
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
			<div className="container">
				<div className="row">
					<div className="col-lg-3 mx-auto">
						<div className=" ">
							<form action="">
								<div className="form-wrapper">
									<input
										type="text"
										placeholder="add a list"
										onChange={handleChange}
										value={items}
									/>
									<a onClick={() => handlelist()}>add</a>
								</div>
							</form>
						</div>
						{list.map((userlist) => (
							<ul>
								<li>{userlist}</li>
							</ul>
						))}
					</div>
				</div>
			</div>
			{/* <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {items}
          </li>
        ))}
      </ul> */}
			{/* <div>
				<User name="Sara" />
				<User name="Cahal" />
				<User name="Edite" />
			</div> */}
		</>
	);
};

export default Home;
