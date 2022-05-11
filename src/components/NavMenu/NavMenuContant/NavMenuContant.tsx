import { INavMenuContant } from "../../../interfaces/interfaces";
import weatherIcon from "../../../images/weather.png";
import cityIcon from "../../../images/city.png";
import style from "./NavMenuContant.module.scss";

function NavMenuContant({ setActivePage }: INavMenuContant) {
  return (
    <div className={style.navMenu__wrapper}>
      <div onClick={() => setActivePage(false)}>
        <img src={weatherIcon} alt="" />
        <p>city</p>
      </div>
      <div onClick={() => setActivePage(true)}>
        <img src={cityIcon} alt="" />
        <p>weather</p>
      </div>
    </div>
  );
}
export default NavMenuContant;
