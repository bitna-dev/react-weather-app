import React from "react";

const Cities = ({ cities, setCity }) => {
	console.log(cities);
	return cities.map((city, index) => (
		<button
			key={index}
			className="rounded-1xl px-4 bg-slate-300 text-white font-semibold p-2"
			onClick={() => {
				setCity(city);
			}}>
			{city}
		</button>
	));
};

export default Cities;
