import { setup } from "axios-cache-adapter";
import querystring from "querystring";
import getConfig from "next/config";

const baseURL = getConfig().publicRuntimeConfig.apiUrl;

const baseConfig = {
  baseURL,
  withCredentials: true,
  cache: {
    maxAge: 15 * 60 * 1000
  }
};

function setupAxiosInstance(customConfig = {}) {
  return setup(deepMerge(baseConfig, customConfig || {}));
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object)
      Object.assign(source[key], deepMerge(target[key], source[key]));
  }

  Object.assign(target || {}, source);
  return target;
}

export default function createApi(accessToken) {
  const axios = setupAxiosInstance(
    accessToken && {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return {
    createOrder(order) {
      return axios.post("/orders", order).then(({ data }) => data);
    },

    fetchOrders(options) {
      return axios
        .get("/orders", querystring.stringify(options))
        .then(({ data }) => data);
    },

    fetchMenu(id) {
      return axios.get(`/menus/${id}`).then(({ data }) => data);
    },

    fetchOrder(id) {
      return axios.get(`/orders/${id}`).then(({ data }) => data);
    },

    fetchMenus({ size = 10, offset = 0 } = {}) {
      return axios
        .get("/menus", querystring.stringify({ size, offset }))
        .then(({ data }) => data);
    },

    fetchRecentMenus() {
      return axios.get("/menus/recent").then(({ data }) => data);
    },

    createMenu(menu) {
      return axios.post("/menus", menu).then(({ data }) => data);
    },

    createBusiness(business) {
      return axios.post("/businesses", business).then(({ data }) => data);
    },

    getOwnBusinesses() {
      return axios.get("/businesses/own").then(({ data }) => data);
    },

    search(searchTerm) {
      return axios.get(`/search?q=${searchTerm}`).then(({ data }) => data);
    },

    fetchBusiness(id) {
      return axios.get(`/businesses/${id}`).then(({ data }) => data);
    },

    fetchBusinessMenus(id) {
      return axios.get(`/businesses/${id}/menus`).then(({ data }) => data);
    },

    fetchProfile() {
      return axios.get("/profile").then(({ data }) => data);
    },

    fetchStatements() {
      return axios.get("/statements").then(({ data }) => data);
    },

    rateMenu(id, rate) {
      return axios
        .post(`/menus/${id}/ratings`, { rate })
        .then(({ data }) => data);
    }
  };
}
