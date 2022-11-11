import React from "react";
import { usestate, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../Component/User";
import { useraction } from "../Service/Actions/useraction";

const Home = () => {
	const dispatch = useDispatch();
	// const userlist = useSelector((state) => state.userlist);
	// const { loading, users, error } = userlist;
	useEffect(() => {
		dispatch(useraction());
	}, []);
	return (
		<>
			<h1>google</h1>
			{/* {loading ? (
				<h2>loading...</h2>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<User user={users} />
			)} */}
		</>
	);
};

export default Home;
