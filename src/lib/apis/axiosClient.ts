import axios from "axios";

export const BASE_URL = "https://api.chagok.site";

export const AxiosClient = axios.create({
  baseURL: `${BASE_URL}`,
});
