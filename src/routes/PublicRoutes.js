import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ContainerHome from "../Container/ContainerHome";

function PublicRoutes() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/ContainerHome" element={<ContainerHome />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default PublicRoutes;
