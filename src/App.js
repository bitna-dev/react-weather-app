import "./App.css";
import { useState, useEffect } from "react";
import Weather from "./components/Weather";
import Cities from "./components/Cities";

function App() {
	const API_KEY = "1e93fd2826b0c820576eec9b29901ce4";
	useEffect(() => {
		getCurrentLoc();
	}, []);

	const [currentWeather, setCurrentWeather] = useState([]);
	const [city, setCity] = useState("Paris");
	const cities = ["Paris", "Seoul", "Toronto"];
	useEffect(() => {
		console.log(city);
		getWeatherByCity();
	}, [city]);

	//현재위치 구하기
	const getCurrentLoc = async () => {
		navigator.geolocation.getCurrentPosition((position) => {
			let lat = position.coords.latitude;
			let lon = position.coords.longitude;
			console.log("현재위치", lat, lon);
			getCurrentWeather(lat, lon);
		});
	};

	//현재위치의 날씨 구하기 api 호출
	const getCurrentWeather = async (lat, lon) => {
		const res = await (
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
			)
		).json();
		console.log(res);
		setCurrentWeather(res);
	};

	//버튼 누르면 나오는 도시의 api 호출
	const getWeatherByCity = async () => {
		const res = await (
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
			)
		).json();
		console.log(res);
	};

	return (
		<div className="w-screen h-screen bg-white p-20">
			<div className="m-auto max-w-3xl w-screen space-y-10">
				{/* 메인 현재위치 날씨 */}
				<Weather weather={currentWeather} getCurrent={() => getCurrentLoc()} />
				{/* 도시별 날씨 */}
				<Cities cities={cities} setCity={setCity} />
			</div>
		</div>
	);
}

export default App;

// // {/*
// // 			1. 현재 위치 기반 날씨가 보인다.
// // 			2. 원하는 도시의 버튼들이 있다.
// // 			3. 도시, 섭씨, 화씨, 날씨상태 등
// // 			4. 버튼을 누르면 도시별 날씨가 보인다.
// // 			5. current location 누르면 현재위치 기반으로 바뀌어야한다.
// // 			6. 데이터 들고오는 동안 로딩 스피너 필요

// // 		*/}
