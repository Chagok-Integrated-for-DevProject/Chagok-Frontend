import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";

import { postRefreshToken } from "./auth";

export const BASE_URL = "https://api.chagok.site";

export const AxiosClient = axios.create({
  baseURL: `${BASE_URL}`,
  withCredentials: true,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let failedQueue: { resolve: any; reject: any }[] = [];
let isRefreshing = false;

AxiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (originalRequest && error?.response?.status == 403) {
      if (isRefreshing) {
        console.log(originalRequest?.url);
        try {
          const token = await new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          });
          console.log(token);
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return axios(originalRequest);
        } catch (error) {
          throw error;
        }
      }
      isRefreshing = true;

      try {
        const newAccessToken = await getNewAcceessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        processQueue(null, newAccessToken);
        return axios(originalRequest);
      } catch (error) {
        throw error;
      } finally {
        isRefreshing = true;
      }
    }
    throw error;
  },
);

async function getNewAcceessToken() {
  const data = await postRefreshToken();
  const newAccessToken = data.jwtToken;

  return newAccessToken;
}

function processQueue(error: AxiosError | null, token = null) {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
}
