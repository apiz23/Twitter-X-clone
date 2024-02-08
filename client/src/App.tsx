import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./view/login";

export const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
			</Routes>
		</>
	);
};
