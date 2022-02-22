import axios from "axios";

export function getCountries() {
  return axios.get('https://api.covid19api.com/countries');
}