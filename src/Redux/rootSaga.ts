import { all } from "redux-saga/effects";
import { locationWotcher } from "./location/saga";
import { weatherWotcher } from "./weather/saga";

export function* rootSaga() {
  yield all([locationWotcher(), weatherWotcher()]);
}
