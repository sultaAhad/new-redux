import React, { useState } from "react";

const ContainerHome = () => {
	const [count, setCount] = useState(0);
	const [num, setNum] = useState(0);
	const getvalue = () => {
		setNum((setNum) => setNum + 1);
	};

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1);
	};

	//Create handleDecrement event handler
	const handleDecrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-lg-4  mx-auto">
						<form action="">
							<select
								name=""
								id=""
								value={num}
								onChange={() => {
									getvalue();
								}}
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</form>
						<button onClick={handleIncrement}>+</button>
						<h5>Count is {count}</h5>
						<button onClick={handleDecrement}>-</button>
						<button onClick={() => setCount(0)}>Reset</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContainerHome;
