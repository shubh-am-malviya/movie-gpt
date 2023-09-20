import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";

const Body = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid, email, displayName }));
			} else {
				// User is signed out
				dispatch(removeUser());
			}
		});
	}, []);

	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
