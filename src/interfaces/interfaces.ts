export interface INavMenuContant {
  setActivePage: (arg: boolean) => void;
}
export interface ILocation {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}
export interface IWeather {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: [{ id: number; main: string; description: string; icon: string }];
  wind: { speed: number; deg: number; gust: number };
}

//export interface ILocations {
//  city: {
//    id: number;
//    lat: number;
//    lon: number;
//    name_de: string;
//    name_en: string;
//    name_es: string;
//    name_fr: string;
//    name_it: string;
//    name_pt: string;
//    name_ru: string;
//    name_uk: string;
//    okato: string;
//    population: number;
//    post: string;
//    tel: string;
//    vk: number;
//  };
//  country: {
//    area: number;
//    capital_en: string;
//    capital_id: number;
//    capital_ru: string;
//    continent: string;
//    cur_code: string;
//    id: number;
//    iso: string;
//    lat: number;
//    lon: number;
//    name_de: string;
//    name_en: string;
//    name_es: string;
//    name_fr: string;
//    name_it: string;
//    name_pt: string;
//    name_ru: string;
//    name_uk: string;
//    neighbours: string;
//    phone: string;
//    population: number;
//    timezone: string;
//    utc: number;
//    vk: number;
//  };
//  created: string;
//  error: string;
//  ip: string;
//  region: {
//    auto: string;
//    id: number;
//    iso: string;
//    lat: number;
//    lon: number;
//    name_de: string;
//    name_en: string;
//    name_es: string;
//    name_fr: string;
//    name_it: string;
//    name_pt: string;
//    name_ru: string;
//    name_uk: string;
//    okato: string;
//    timezone: string;
//    utc: number;
//    vk: number;
//  };
//  request: number;
//  timestamp: number;
//}
export interface ILocDefoultState {
  city: string | null;
}
export interface ILocAction<T> {
  type: string;
  payload: T;
}
export interface IWeatherAction<T> {
  type: string;
  payload: T;
}
