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

export function createOrder(order) {
  return axios.post("/orders", order).then(({ data }) => data);
}

export function fetchOrders(options) {
  return axios
    .get("/orders", querystring.stringify(options))
    .then(({ data }) => data);
}

export function fetchMenu(id) {
  return axios.get(`/menus/${id}`).then(({ data }) => data);
}

export function fetchOrder(id) {
  return axios.get(`/orders/${id}`).then(({ data }) => data);
}

export function fetchMenus({ size = 10, offset = 0 } = {}) {
  return axios
    .get("/menus", querystring.stringify({ size, offset }))
    .then(({ data }) => data);
}

export function fetchRecentMenus() {
  return axios.get("/menus/recent").then(({ data }) => data);
}

export function createMenu(menu) {
  return axios.post("/menus", menu).then(({ data }) => data);
}

export function createBusiness(business) {
  return axios.post("/businesses", business).then(({ data }) => data);
}

export function getOwnBusinesses() {
  return axios.get("/businesses/own").then(({ data }) => data);
}

export function search(searchTerm) {
  return axios.get(`/search?q=${searchTerm}`).then(({ data }) => data);
}

export function fetchBusiness(id) {
  return axios.get(`/businesses/${id}`).then(({ data }) => data);
}

export function fetchBusinessMenus(id) {
  return axios.get(`/businesses/${id}/menus`).then(({ data }) => data);
}

export function fetchProfile() {
  return axios.get("/profile").then(({ data }) => data);
}

export function fetchStatements() {
  return axios.get("/statements").then(({ data }) => data);
}

export function rateMenu(name, rating) {
  return axios
    .get(`/rateMenu?MenuName=${name}&points=${rating}`)
    .then(({ data }) => data);
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object)
      Object.assign(source[key], deepMerge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
}
