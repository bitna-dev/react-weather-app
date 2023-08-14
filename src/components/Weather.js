import React from "react";

const Weather = ({ weather, getCurrent }) => {
	console.log("weather: ", weather);
	const changeCelcius = (far) => {
		let cel = ((far - 32) / 1.8).toFixed(1);
		console.log("cel==?", far);
		return cel + "°C";
	};

	return (
		<div className="m-auto">
			<div className=" flex justify-between m-6">
				<div className="flex flex-col justify-between space-y-8">
					<div className="">
						<span className="text-3xl font-bold font-sans">
							{weather && weather?.name + `,` + weather.sys?.country}
						</span>
						<span
							className="material-icons-outlined mx-2 cursor-pointer"
							onClick={() => getCurrent()}>
							autorenew
						</span>
						<br />
						<span className="text-xs text-slate-500">
							Humidity {weather?.main?.humidity}%
						</span>
					</div>
					<span className="font-sans font-bold text-4xl mb-4">
						{weather && changeCelcius(weather?.main?.temp)}
					</span>
				</div>
				<div className="text-center">
					<div className="bg-slate-400 w-40 h-40 rounded-full mb-2" />
				</div>
			</div>
			{/* 두번째 단 */}
			<div className="bg-slate-100 rounded-lg p-6">
				<div className="flex justify-between px-3">
					<span className="text-xs text-slate-400 font-bold">
						AIR CONDITIONS
					</span>
				</div>
				<div className=" flex">
					<div className="w-1/2 p-6">
						<div className="flex space-x-1 text-slate-400">
							<span className="material-icons-outlined">thermostat</span>
							<span>Real Feel</span>
						</div>
						<div className="pl-7 font-bold text-lg my-3">
							{weather && changeCelcius(weather?.main?.feels_like)}
						</div>
					</div>
					<div className="w-1/2 p-6">
						<div className="flex space-x-1 text-slate-400">
							<span className="material-icons-outlined">air</span>
							<span>Wind</span>
						</div>
						<div className="pl-7 font-bold text-lg my-3">
							{weather?.wind?.speed} miles/h
						</div>
					</div>
				</div>
				<div className="flex">
					<div className="w-1/2 p-6">
						<div className="flex space-x-1 text-slate-400">
							<span className="material-icons-outlined">thermostat</span>
							<span>Min Temperature</span>
						</div>
						<div className="pl-7 font-bold text-lg my-3">
							{weather && changeCelcius(weather?.main?.temp_min)}
						</div>
					</div>
					<div className="w-1/2 p-6">
						<div className="flex space-x-1 text-slate-400">
							<span className="material-icons-outlined">thermostat</span>
							<span>Max Temperature</span>
						</div>
						<div className="pl-7 font-bold text-lg my-3">
							{weather && changeCelcius(weather?.main?.temp_max)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weather;
