import { useState } from "react";
import NavMenuContant from "./NavMenuContant/NavMenuContant";
import WeatherWindow from "./WeatherWindow/WeatherWindow";
import LocationWindow from "./LocationWindow/LocationWindow";
import style from "./NavMenu.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function NavMenu() {
  const dispatch = useDispatch();
  //saga
  //useEffect(() => {
  //  dispatch({ type: "WEATHER_FETCH_REQUEST" });
  //});
  const [activePage, setActivePage] = useState(true);
  return (
    <div className={style.wrapper}>
      {activePage ? <WeatherWindow /> : <LocationWindow />}
      <NavMenuContant setActivePage={setActivePage} />
    </div>
  );
}
export default NavMenu;
