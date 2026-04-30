// utils/validators.ts
export const validateName = (name: string) => {
	if (!name) return "Name is required";
	if (name.length < 3) return "Minimum 3 characters";
	return "";
};

export const validateEmail = (email: string) => {
	if (!email) return "Email is required";
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!regex.test(email)) return "Invalid email";
	return "";
};

export const validatePassword = (password: string) => {
	if (!password) return "Password is required";
	if (password.length < 6) return "Minimum 6 characters";
	return "";
};