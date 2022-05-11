import style from "./WeatherWindow.module.scss";
import location from "../../../images/location.png";
import wind from "../../../images/wind.png";
import humidity from "../../../images/humidity.png";
import loader from "../../../images/loader.gif";
import { IWeatherWindow } from "../../../interfaces/interfaces";

function WeatherWindow({ weather, isLoaded, setActivePage }: IWeatherWindow) {
  return (
    <div className={style.wrapper__WeatherWindow}>
      {!isLoaded ? <img className={style.loader} src={loader} alt="" /> : null}
      {weather && weather.location ? (
        <div>
          <div className={style.location}>
            <img src={location} alt="" />
            <p>{weather.location.name}</p>
            <p> {weather.location.country}</p>
            <button onClick={() => setActivePage(false)}>City</button>
          </div>

          <p className={style.date}>
            {String(new Date(weather.location.localtime).toLocaleDateString())}
          </p>
          <div className={style.time__wrapper}>
            <p className={style.time}>
              {String(
                new Date(weather.location.localtime).toLocaleTimeString()
              ).slice(0, -3)}
            </p>
            <div className={style.weather__wrapper}>
              <img src={`https:${weather.current.condition.icon}`} />
              <p>{weather.current.condition.text}</p>
              <p className={style.weather__temp}>
                {parseInt(String(weather.current.temp_c))} °C
              </p>
            </div>
          </div>
          <div className={style.weather__settings}>
            <div>
              <img src={wind} alt="" />
              <p>wind speed: {weather.current.wind_kph} km</p>
            </div>
            <div>
              <img src={humidity} alt="" />
              <p>humidity: {weather.current.humidity} %</p>
            </div>
          </div>
        </div>
      ) : (
        <p className={style.error}>your city was not found...</p>
      )}
    </div>
  );
}
export default WeatherWindow;
