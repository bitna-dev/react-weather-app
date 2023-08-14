import React from "react";

const Button = ({ title }) => {
	return (
		<div className="rounded-3xl px-4 bg-slate-300 text-white font-semibold p-2">
			{title}
		</div>
	);
};

export default Button;
