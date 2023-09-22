import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

import Header from "./Header";
import { validateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import { addUser } from "../redux/userSlice";
import { USER_AVATAR_IMG_URL } from "../utils/constants";

const Login = () => {
	const dispatch = useDispatch();
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [formError, setFormError] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	const submitClickHandler = (e) => {
		e.preventDefault();
		const error = validateForm(
			isSignInForm,
			name?.current?.value,
			email.current.value,
			password.current.value
		);
		setFormError(error);
		if (error) return;

		if (isSignInForm) {
			// Sign In User
			signInWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in
					// const user = userCredential.user;
					// console.log("USER", user);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setFormError(`${errorCode} - ${errorMessage}`);
				});
		} else {
			// Sign Up user
			createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
						photoURL: USER_AVATAR_IMG_URL,
					})
						.then(() => {
							const { email, displayName, uid, photoURL } = auth.currentUser;
							dispatch(addUser({ email, displayName, uid, photoURL }));
						})
						.catch((error) => {
							const errorCode = error.code;
							const errorMessage = error.message;
							setFormError(`${errorCode} - ${errorMessage}`);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setFormError(`${errorCode} - ${errorMessage}`);
				});
		}
	};

	return (
		<div>
			<Header />
			<div>
				<img
					className="absolute h-screen w-full"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background-img"
				/>
			</div>
			<form className="w-1/3 p-12 my-36 absolute bg-black/80 mx-auto right-0 left-0 text-white rounded-md">
				<h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
				{!isSignInForm && (
					<input
						ref={name}
						className="p-4 my-2 w-full bg-gray-800 rounded-sm"
						type="text"
						placeholder="Full Name "
					/>
				)}
				<input
					ref={email}
					className="p-4 my-2 w-full bg-gray-800 rounded-sm"
					type="text"
					placeholder="Email Address"
				/>
				<input
					ref={password}
					className="p-4 my-2 w-full bg-gray-800 rounded-sm"
					type="password"
					placeholder="Password"
				/>

				<p className="p-4 text-red-500">{formError}</p>

				<button onClick={submitClickHandler} className="bg-red-600 w-full p-2 my-4 rounded-md">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>

				<p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
					{isSignInForm ? "New to Netflix ? Sign Up Now" : "Already Registered ? Sign In Now"}
				</p>
			</form>
		</div>
	);
};

export default Login;
