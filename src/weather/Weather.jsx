import "../weather/Weather.css";
import { useEffect, useState } from "react";
import searchIcon from "../assets/images/search.png";
import cloudIcon from "../assets/images/cloud.png";
import clearIcon from "../assets/images/clear.png";

import drizzleIcon from "../assets/images/drizzle.png";
import humidityIcon from "../assets/images/Humidity.png";
import rainIcon from "../assets/images/rain.png";
import snowIcon from "../assets/images/snow.png";
import windIcon from "../assets/images/wind.png";

const WeatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  long,
  humi,
  wind,
}) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lati">Latitude </span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="longi">longitude </span>
          <span>{long}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={humidityIcon} alt="" className="humi" />
          <div className="data">
            <div className="humi-perc">{humi}%</div>
            <div className="humi-text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="wind" />
          <div className="data">
            <div className="wind-perc">{wind} Km/hr</div>
            <div className="wind-text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export const Weather = () => {
  let api_key = "593053e14a1bf18ed0bd92a26de89232";
  const [text, setText] = useState("Chennai");
  const [icons, setIcons] = useState(snowIcon);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("IN");
  const [lati, setLatit] = useState(0);
  const [long, setLongi] = useState(0);
  const [humi, setHumi] = useState(0);
  const [wind, setWind] = useState(0);
  const [cityNotfound, setCityNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const weatherIcon = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": drizzleIcon,
    "03n": drizzleIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    setLoading(true);

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`;

    try {
      let res = await fetch(url);
      let data = await res.json();
      if (data.cod === "404") {
        console.error("City Not Found");
        setCityNotFound(true);
        setLoading(false);
        return;
      }
      setHumi(data.main.humidity);
      setWind(data.wind.speed);
      setTemp(Math.floor(data.main.temp));
      setCity(data.name);
      setCountry(data.sys.country);
      setLatit(data.coord.lat);
      setLongi(data.coord.lon);
      const iconCode = data.weather[0].icon;
      setIcons(weatherIcon[iconCode] || clearIcon);
      setCityNotFound(false);
    } catch (error) {
      setError("Error occured while data fetching");
    } finally {
      setLoading(false);
    }
  };
  const handleCity = (e) => {
    setText(e.target.value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      search();
    }
  };
  useEffect(function () {
    search();
  }, []);

  return (
    <>
      <div className="container">
        <div className="input">
          <input
            type="text"
            className="cityInput"
            placeholder="Search city"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKey}
          />
          <div className="search" onClick={search}>
            <img src={searchIcon} alt="" className="image" />
          </div>
        </div>
        {loading && <div className="load-message">Loading...</div>}
        {error && <div className="error-message">{error}</div>}
        {cityNotfound && <div className="city-not-found">City Not Found</div>}
        {!loading && !cityNotfound && (
          <WeatherDetails
            icon={icons}
            temp={temp}
            city={city}
            country={country}
            lat={lati}
            long={long}
            humi={humi}
            wind={wind}
          />
        )}
      </div>
    </>
  );
};
