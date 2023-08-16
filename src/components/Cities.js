import React from "react";

const Cities = ({ cities, handleCurrentCity }) => {
	console.log(cities);

	return (
		<>
			<button
				className="rounded-1xl px-4 bg-slate-300 text-white font-semibold p-2"
				onClick={() => handleCurrentCity("current")}>
				Where You are at
			</button>
			{cities.map((city, index) => (
				<button
					key={index}
					className="rounded-1xl px-4 bg-slate-300 text-white font-semibold p-2"
					onClick={() => {
						handleCurrentCity(city);
					}}>
					{city}
				</button>
			))}
		</>
	);
};

export default Cities;
