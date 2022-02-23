import axios from "axios";
import moment from "moment";

export function getCountries() {
  return axios.get('https://api.covid19api.com/countries');
}

export function getReportCountry(slug) {
  return axios.get(`https://api.covid19api.com/dayone/country/${slug}?from=2021-01-01T00:00:00&to=${moment()
  .utc(0)
  .format()}`);
}

export function getTotalSummary() {
  return axios.get('https://api.covid19api.com/summary');
}