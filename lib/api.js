import { setup } from "axios-cache-adapter";
import querystring from "querystring";
import getConfig from "next/config";

const baseURL = getConfig().publicRuntimeConfig.apiUrl;

const baseConfig = {
  baseURL,
  cache: {
    maxAge: 15 * 60 * 1000
  }
};

let axios;

function setupAxiosInstance(customConfig = {}) {
  axios = setup(deepMerge(baseConfig, customConfig));
}

setupAxiosInstance();

export function setToken(token) {
  if (token) {
    setupAxiosInstance({ headers: { Authorization: `Bearer ${token}` } });
  }
}

export function fetchOrders(options) {
  return axios
    .get("/orders", querystring.stringify(options))
    .then(({ data }) => data);
}

export function fetchMenu(id) {
  return axios.get(`/menus/${id}`).then(({ data }) => data);
}

export function fetchRecentMenus() {
  return axios.get("/menus/recent").then(({ data }) => data);
}

export function createMenu(menu) {
  return axios.post("/menus", menu).then(({ data }) => data);
}

export function createBusiness(business) {
  return axios.post("/business", business).then(({ data }) => data);
}

export function getOwnBusinesses() {
  return axios.get("/business/own").then(({ data }) => data);
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object)
      Object.assign(source[key], deepMerge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
}
