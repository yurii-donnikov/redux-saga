import style from "./LocationWindow.module.scss";
import { useFormik, FormikProps } from "formik";
import { ILocationWindow } from "../../../interfaces/interfaces";

function LocationWindow({ getWeather, setActivePage }: ILocationWindow) {
  const formik = useFormik({
    initialValues: {
      city: "",
    },
    onSubmit: (values) => {
      if (/[a-zA-Z0-9А-Яа-я_\S]/.test(values.city)) {
        getWeather(values.city);
        setActivePage(true);
      }
      formik.resetForm();
    },
  });
  return (
    <div className={style.wrapper__LocationWindow}>
      <button
        className={style.LocationWindow__return}
        onClick={() => setActivePage(true)}
      >
        Return
      </button>
      <form className={style.input__wrapper} onSubmit={formik.handleSubmit}>
        <input
          className={style.input__newCity}
          id="city"
          name="city"
          required
          type="text"
          placeholder="Write your city"
          onChange={formik.handleChange}
          value={formik.values.city}
        />
        <button className={style.input__btn} type="submit">
          find
        </button>
      </form>
    </div>
  );
}

export default LocationWindow;
