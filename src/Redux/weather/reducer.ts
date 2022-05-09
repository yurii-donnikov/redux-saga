import { WEATHER_FETCH_SUCCES, WEATHER_FETCH_ERROR } from "./actions";
import { IWeatherAction } from "../../interfaces/interfaces";
import { IWeather } from "../../interfaces/interfaces";

export interface IWeatherDefoultState {
  data: IWeather | null;
  error: null | Error;
}
const defoultState: IWeatherDefoultState = {
  data: null,
  error: null,
};

export function WeatherReducer<T>(
  state = defoultState,
  action: IWeatherAction<T>
) {
  switch (action.type) {
    case WEATHER_FETCH_SUCCES: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case WEATHER_FETCH_ERROR: {
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
