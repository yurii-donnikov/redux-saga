import { combineReducers } from "redux";
import { LocationReducer } from "./location/reducer";
import { WeatherReducer } from "./weather/reducer";

export const rootReduces = combineReducers({
  LocationReducer: LocationReducer,
  WeatherReducer: WeatherReducer,
});
