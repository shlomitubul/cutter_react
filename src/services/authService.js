import httpService from "../services/httpService";
import jwtDecoder from "jwt-decode";
import config from "../../src/config.json";

httpService.setJwt(getJwt());

export async function login(username, password) {
  const { data: jwt } = await httpService.post(
    config["endPoints"]["apiAuthLogin"],
    {
      username,
      password
    },
    { "Content-Type": "application/json" }
  );
  localStorage.setItem("token", JSON.stringify(jwt["token"]));
}
export function logout() {
  localStorage.removeItem("token");
}

export function getCurrerntUser() {
  try {
    const token = localStorage.getItem("token");
    const user = jwtDecoder(token);
    return user;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}

export async function loginToInstagram(username, password) {
  const { data } = await httpService.post(
    config["endPoints"]["apiInstagremLogin"],
    {
      username,
      password
    },
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  return data;
}

export default {
  login,
  logout,
  getCurrerntUser,
  getJwt,
  loginToInstagram
};
