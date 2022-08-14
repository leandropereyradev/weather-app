import { useEffect, useState } from "react";
import Loading from "./loading";
import WeatherForm from "./weatherForm";
import WeatherMainInfo from "./weatherMainInfo";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);

  async function loadInfo(city = "barcelona") {
    try {
      const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`);

      const json = await request.json();
      console.log(json);
      setTimeout(() => {
        setWeather(json);
      }, 1000);
    } catch (error) {}
  }

  const changeCity = (city) => {
    loadInfo(city);
    setWeather(null);
  };

  return (
    <div className="container">
      <WeatherForm onChangeCity={changeCity} />
      <div className="containerWeather">{weather ? <WeatherMainInfo weather={weather} /> : <Loading />}</div>
    </div>
  );
}
