export const validateForm = (isSignIn, name, email, password) => {
	const nameRegex = /^[a-zA-Z0-9]+$/;
	const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	if (!isSignIn && !nameRegex.test(name)) return "Name is not valid";
	if (!emailRegex.test(email)) return "Email is not valid";
	if (!passwordRegex.test(password)) return "Password is not valid";

	return null;
};
