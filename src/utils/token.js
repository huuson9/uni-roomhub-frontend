// get access token from local storage
const getAccessToken = () => localStorage.getItem("accessToken");

// set access token to local storage
const setAccessToken = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

// remove access token from local storage
const removeAccessToken = () => {
  localStorage.removeItem("accessToken");
};

// get refresh token from local storage
const getRefreshToken = () => localStorage.getItem("refreshToken");

// set refresh token to local storage
const setRefreshToken = (refreshToken) => {
  localStorage.setItem("refreshToken", refreshToken);
};

// remove refresh token from local storage
const removeRefreshToken = () => {
  localStorage.removeItem("refreshToken");
};

const token = {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
};

export default token;
