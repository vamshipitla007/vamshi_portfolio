// components/Button.tsx
import React from "react";

type Props = {
	text: string;
	onClick?: () => void;
	type?: "button" | "submit";
	variant?: "primary" | "secondary";
	icon?: string; // image path
};

const Button: React.FC<Props> = ({
	text,
	onClick,
	type = "button",
	variant = "primary",
	icon,
}) => {
	const base =
		"w-full py-3 rounded-lg font-medium transition flex items-center justify-center gap-2";

	const styles =
		variant === "primary"
			? "bg-[#FF8A00] text-white hover:bg-[#e67a00]"
			: "bg-white border border-gray-300 text-gray-700";

	return (
		<button type={type} onClick={onClick} className={`${base} ${styles}`}>
			{icon && (
				<img src={icon} alt="icon" className="w-5 h-5 object-contain" />
			)}
			<span>{text}</span>
		</button>
	);
};

export default Button;