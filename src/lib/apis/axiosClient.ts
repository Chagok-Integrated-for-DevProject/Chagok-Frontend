import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: "https://api.chagok.site",
});
