import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div>
				<img
					className="absolute"
					src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg"
					alt="background-img"
				/>
			</div>
			<form className="w-1/3 p-12 my-36 absolute bg-black/80 mx-auto right-0 left-0 text-white rounded-md">
				<h1 className="font-bold text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
				{!isSignInForm && (
					<input
						className="p-4 my-2 w-full bg-gray-800 rounded-sm"
						type="text"
						placeholder="Full Name "
					/>
				)}
				<input
					className="p-4 my-2 w-full bg-gray-800 rounded-sm"
					type="text"
					placeholder="Email Address"
				/>
				<input
					className="p-4 my-2 w-full bg-gray-800 rounded-sm"
					type="password"
					placeholder="Password"
				/>
				<button className="bg-red-600 w-full p-2 my-4 rounded-md">
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
