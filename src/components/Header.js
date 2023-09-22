import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_IMG_URL } from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid, email, displayName, photoURL }));
				navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unSubscribe();
	}, [dispatch, navigate]);

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
				navigate("/error-page");
			});
	};

	return (
		<div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-44" src={LOGO_IMG_URL} alt="netflix-logo" />
			{user && (
				<div className="flex flex-wrap content-center">
					{/* <UserCircleIcon className="w-6 h-6 text-white" /> */}
					<img alt="User Logo" src={user?.photoURL} />
					<button onClick={handleSignOut} className="ml-1 text-white font-bold">
						Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
