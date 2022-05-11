import NavMenuContant from "./NavMenuContant/NavMenuContant";
import WeatherWindow from "./WeatherWindow/WeatherWindow";
import LocationWindow from "./LocationWindow/LocationWindow";
import style from "./NavMenu.module.scss";
import { useEffect, useState } from "react";

function NavMenu() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState(null);
  const [activePage, setActivePage] = useState(true);

  const getWeather = (key: string) => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=c107b2ab099e4ef498b141134221005&q=${key}&days=1&aqi=no&alerts=no`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWeather(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    getWeather("kharkiv");
  }, []);

  return (
    <div className={style.wrapper}>
      {activePage ? (
        <WeatherWindow
          setActivePage={setActivePage}
          weather={weather}
          isLoaded={isLoaded}
        />
      ) : (
        <LocationWindow getWeather={getWeather} setActivePage={setActivePage} />
      )}
      <NavMenuContant setActivePage={setActivePage} />
    </div>
  );
}
export default NavMenu;
