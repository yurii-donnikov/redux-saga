import { LOCATION_FETCH_SUCCES, LOCATION_FETCH_ERROR } from "./actions";
import { ILocAction } from "../../interfaces/interfaces";
import { ILocation } from "../../interfaces/interfaces";

export interface ILocDefoultState {
  data: ILocation | null;
  error: null | Error;
}
const defoultState: ILocDefoultState = {
  data: null,
  error: null,
};

export function LocationReducer<T>(
  state = defoultState,
  action: ILocAction<T>
) {
  switch (action.type) {
    case LOCATION_FETCH_SUCCES: {
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    }
    case LOCATION_FETCH_ERROR: {
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
