import { call, put, takeEvery } from "redux-saga/effects";
import { getLocation } from "../../api/location/location";
import { ILocation } from "../../interfaces/interfaces";
import {
  LOCATION_FETCH_SUCCES,
  LOCATION_FETCH_REQUEST,
  LOCATION_FETCH_ERROR,
} from "../location/actions";

function* fetchLocationWorker() {
  try {
    const data = (yield call(getLocation)) as ILocation;
    yield put({ type: LOCATION_FETCH_SUCCES, payload: data });
  } catch (err) {
    yield put({ type: LOCATION_FETCH_ERROR, payload: err });
  }
}

export function* locationWotcher() {
  yield takeEvery(LOCATION_FETCH_REQUEST, fetchLocationWorker);
}
