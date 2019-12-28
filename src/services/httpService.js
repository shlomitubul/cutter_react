import axios from "axios";

axios.interceptors.response.use(null, error => {
  const exeptedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (exeptedError) {
    return Promise.reject({
      isServerError: false,
      reason: "username or password are incorrect"
    });
  } else {
    return Promise.reject({
      isServerError: true,
      reason: "server error occurred )"
    });
  }
});

export function setJwt(jwt) {
  if (!jwt) return;
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt.replace(
    /['"]+/g,
    ""
  )}`;
}

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  update: axios.put,
  setJwt
};
