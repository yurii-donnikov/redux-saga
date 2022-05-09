import { IWeather, ILocation } from "../../interfaces/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { ILocDefoultState } from "../../Redux/location/reducer";
import { IWeatherDefoultState } from "../../Redux/weather/reducer";
interface Iasd {
  LocationReducer: ILocDefoultState;
  WeatherReducer: IWeatherDefoultState;
}
export const getWeather = (city: string) => {
  return function (): Promise<IWeather> {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=8b08a81fa153df3f84244abb5d5233c5`
    ).then((response) => response.json());
  };
};

//export const getWeathers = (): Promise<IWeather> => {
//  let data: ILocation;
//  fetch(`http://ip-api.com/json/?fields=61439`)
//    .then((response) => response.json())
//    .then((result) => (data = result));

//  return fetch(
//    `https://api.openweathermap.org/data/2.5/weather?q=${data.city}&units=metric&appid=8b08a81fa153df3f84244abb5d5233c5`
//  ).then((response) => response.json());
//};
