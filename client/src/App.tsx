import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./view/login";
import { Feed } from "./view/feed";

export const App: React.FC = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/feed" element={<Feed />} />
			</Routes>
		</>
	);
};
