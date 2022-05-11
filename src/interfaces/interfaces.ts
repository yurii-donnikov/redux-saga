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
export interface IWeathers {
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

export interface IWeather {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}

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
export interface IWeatherWindow {
  weather: IWeather | null;
  isLoaded: boolean;
  setActivePage: (arg: boolean) => void;
}
export interface ILocationWindow {
  getWeather: (arg: string) => void;
  setActivePage: (arg: boolean) => void;
}
