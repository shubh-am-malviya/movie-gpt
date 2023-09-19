export const validateForm = (isSignIn, name, email, password) => {
	const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
	const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

	if (!isSignIn && name === "") return "Name is not valid";
	if (!emailRegex.test(email)) return "Email is not valid";
	if (!passwordRegex.test(password)) return "Password is not valid";

	return null;
};
