import { call, put, takeEvery } from "redux-saga/effects";
import { getWeather } from "../../api/weather/weather";
import { IWeather } from "../../interfaces/interfaces";
import {
  WEATHER_FETCH_SUCCES,
  WEATHER_FETCH_REQUEST,
  WEATHER_FETCH_ERROR,
} from "./actions";
import { useDispatch, useSelector } from "react-redux";

//function* fetchWeatherWorkers(sity: string) {
//  return function* () {
//    try {
//      const data = (yield call(getWeather)) as IWeather;
//      yield put({ type: WEATHER_FETCH_SUCCES, payload: data });
//    } catch (err) {
//      yield put({ type: WEATHER_FETCH_ERROR, payload: err });
//    }
//  };
//}

function* fetchWeatherWorker() {
  try {
    const data = (yield call(getWeather("Lozova"))) as IWeather;
    yield put({ type: WEATHER_FETCH_SUCCES, payload: data });
  } catch (err) {
    yield put({ type: WEATHER_FETCH_ERROR, payload: err });
  }
}

export function* weatherWotcher() {
  yield takeEvery(WEATHER_FETCH_REQUEST, fetchWeatherWorker);
}
