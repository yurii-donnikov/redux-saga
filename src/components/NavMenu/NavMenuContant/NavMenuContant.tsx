import { INavMenuContant } from "../../../interfaces/interfaces";
import weatherIcon from "../../../images/weather.png";
import cityIcon from "../../../images/city.png";
import style from "./NavMenuContant.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  LOCATION_FETCH_REQUEST,
  LOCATION_FETCH_SUCCES,
} from "../../../Redux/location/actions";
import { ILocDefoultState } from "../../../Redux/location/reducer";
import { IWeatherDefoultState } from "../../../Redux/weather/reducer";
import { ILocation } from "../../../interfaces/interfaces";

interface Iasd {
  LocationReducer: ILocDefoultState;
  WeatherReducer: IWeatherDefoultState;
}

function NavMenuContant({ setActivePage }: INavMenuContant) {
  const dispatch = useDispatch();

  let city = useSelector((store: Iasd) => store.WeatherReducer);
  console.log(city);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const asx = (key: string) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${key}&units=metric&appid=8b08a81fa153df3f84244abb5d5233c5`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };

  useEffect(() => {
    asx("Lozova");
  }, []);
  console.log(items);
  if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return (
      <div>
        <p>asd</p>
      </div>
    );
  }

  //return (
  //  <div className={style.navMenu__wrapper}>
  //    <div onClick={() => setActivePage(false)}>
  //      <img src={weatherIcon} alt="" />
  //      <p>city</p>
  //    </div>
  //    <div onClick={() => setActivePage(true)}>
  //      <img src={cityIcon} alt="" />
  //      <p>weather</p>
  //    </div>
  //    {aaa.data ? <p>{aaa.data.city}</p> : null}
  //  </div>
  //);
}
export default NavMenuContant;
