import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContainerHome from "../Container/ContainerHome";
import User from "../Component/User";

function PublicRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/ContainerHome" element={<ContainerHome />} />
					<Route path="/User" element={<User />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default PublicRoutes;
