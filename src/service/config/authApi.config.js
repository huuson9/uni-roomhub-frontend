import axios from "axios";
import token from "@/utils/token";
import baseUrl from "./baseUrl";
import publicApi from "./publicApi.config";

const authApi = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const refreshAccessToken = async () => {
  try {
    const refreshToken = token.getRefreshToken();

    if (!refreshToken) return Promise.reject(new Error("No refresh token"));

    const response = await publicApi({
      method: "POST",
      url: "/refreshToken",
      data: {
        refreshToken,
      },
    });

    const { accessToken } = response.data.data;

    token.setAccessToken(accessToken);
    return accessToken;
  } catch (error) {
    return Promise.reject(error);
  }
};

authApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let retry = 0;

authApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      if (retry < 3) {
        // retry 3 times
        retry++;
        return refreshAccessToken()
          .then(() => {
            const accessToken = token.getAccessToken();

            error.config.headers.Authorization = `Bearer ${accessToken}`;
            return authApi.request(error.config);
          })
          .catch(() => {
            token.removeAccessToken();
            token.removeRefreshToken();
            window.location.href = "/sign-in";
            return Promise.reject(error);
          });
      }
      retry = 0;
      token.removeAccessToken();
      token.removeRefreshToken();
      window.location.href = "/sign-in";
      return Promise.reject(error);
    }

    if (
      error.response.status === 403 &&
      error.response.statusText === "Forbidden"
    ) {
      // eslint-disable-next-line no-alert
      alert("Your permissions have been changed, please reload the page");
      window.location.href = "/";
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default authApi;
