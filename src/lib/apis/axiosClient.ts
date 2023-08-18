import axios from "axios";

export const BASE_URL = "http://49.50.173.143:8080";

export const AxiosClient = axios.create({
  baseURL: `${BASE_URL}`,
  //"https://api.chagok.site",
});
