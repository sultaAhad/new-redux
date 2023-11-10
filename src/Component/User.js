import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "bootstrap-4-react/lib/components";

const User = (props) => {
	// const [state, setState] = useState({ username: "", age: null });

	// const handleSubmit = (event) => {
	// 	event.preventDefault();

	// 	const age = state.age;

	// 	if (!Number(age)) {
	// 		alert("Your age must be a number");
	// 		return;
	// 	}

	// 	console.log("submitting", state);
	// };
	// const handleChange = (event) => {
	// 	const name = event.target.name;
	// 	const value = event.target.value;
	// 	setState({ ...state, [name]: value });
	// };
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data: response } = await axios.get(
					"https://jsonplaceholder.typicode.com/users",
				);
				setData(response);
			} catch (error) {
				console.error(error.message);
			}
			setLoading(false);
		};

		fetchData();
	}, []);
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		const Increse = count + 1;
		setTimeout(() => setCount((currentCount) => currentCount, Increse), 1000);
	};
	const handleDecrement = () => {
		const decrese = count - 1;
		setTimeout(() => setCount((currentCount) => currentCount, decrese), 1000);
	};
	return (
		<>
			{/* <form onSubmit={handleSubmit}>
				<h1>Hi!</h1>

				<p>Enter your name:</p>
				<input type="text" name="username" onChange={handleChange} />

				<p>Enter your age:</p>
				<input type="text" name="age" onChange={handleChange} />

				<br />
				<br />
				<input type="submit" />
			</form>
			<h1>Hello, {props.name}</h1> */}
			<div>
				{loading && <div>Loading</div>}
				{!loading && (
					<div>
						<h2>Doing stuff with data</h2>
						{data.map((item) => (
							<span>{item.name}</span>
						))}
					</div>
				)}
			</div>
			<div>
				<h1>{count}</h1>
				<Button handleClick={handleIncrement}>Increment</Button>
				<Button handleClick={handleDecrement}>Decrement</Button>
			</div>
		</>
	);
};

export default User;
