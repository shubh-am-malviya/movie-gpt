import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { CpuChipIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO_IMG_URL, SUPPORTED_LANG } from "../utils/constants";
import { toggleGptSearchView } from "../redux/gptSearchSlice";
import { changeLanguage } from "../redux/appConfigSlice";

const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const showGptSearch = useSelector((state) => state.gptSearch.showGptSearch);

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				const { uid, email, displayName, photoURL } = user;
				dispatch(addUser({ uid, email, displayName, photoURL }));
				pathname === "/" && navigate("/browse");
			} else {
				// User is signed out
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => unSubscribe();
	}, [dispatch, navigate, pathname]);

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

	const handleGptSearchClick = () => {
		dispatch(toggleGptSearchView());
	};

	const handleLanguageChange = (e) => {
		dispatch(changeLanguage(e.target.value));
	};

	return (
		<div className="absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between">
			<img className="w-40 mx-auto md:mx-0" src={LOGO_IMG_URL} alt="netflix-logo" />
			{user && (
				<div className="flex flex-wrap content-center">
					{showGptSearch && (
						<select
							className="bg-gray-800 text-white rounded-md p-1 px-2"
							onChange={handleLanguageChange}
						>
							{SUPPORTED_LANG.map((lang) => (
								<option key={lang.identifier} value={lang.identifier}>
									{lang.name}
								</option>
							))}
						</select>
					)}

					<button
						className="flex content-center bg-purple-900 hover:bg-purple-800 text-white mx-4 p-1 px-2 rounded-md"
						onClick={handleGptSearchClick}
					>
						{showGptSearch ? (
							"Homepage"
						) : (
							<>
								<CpuChipIcon className="w-6 mr-1" /> GPT Search
							</>
						)}
					</button>

					{/* <img alt="User Logo" src={user?.photoURL} /> */}

					<button
						onClick={handleSignOut}
						className="flex bg-black text-white p-1 px-2 font-semibolds"
					>
						<UserCircleIcon className="w-6 mr-1" /> Sign Out
					</button>
				</div>
			)}
		</div>
	);
};

export default Header;
