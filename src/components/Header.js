import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { removeUser } from "../redux/userSlice";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				dispatch(removeUser());
				navigate("/");
			})
			.catch((error) => {
				// An error happened.
				navigate("/error-page");
			});
	};

	return (
		<div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-44"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="netflix-logo"
			/>
			{user && (
				<div className="flex flex-wrap content-center">
					<UserCircleIcon className="w-6 h-6 text-white" />
					<button onClick={handleSignOut} className="ml-1 text-white font-bold">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
