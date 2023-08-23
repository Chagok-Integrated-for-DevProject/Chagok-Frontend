import axios from "axios";

export const BASE_URL = "http://api.chagok.site:8080";

export const AxiosClient = axios.create({
  baseURL: `${BASE_URL}`,
});
