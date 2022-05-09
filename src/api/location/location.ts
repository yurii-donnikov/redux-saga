import { ILocation } from "../../interfaces/interfaces";

export const getLocation = (): Promise<ILocation> => {
  //return fetch("http://api.sypexgeo.net").then((response) => response.json());
  return fetch("http://ip-api.com/json/?fields=61439").then((response) =>
    response.json()
  );
};
