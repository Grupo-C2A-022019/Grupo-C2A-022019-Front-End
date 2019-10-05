import { setup } from "axios-cache-adapter";
import querystring from "querystring";
import getConfig from "next/config";

const baseURL = getConfig().publicRuntimeConfig.apiUrl;

const axios = setup({
  baseURL,
  cache: {
    maxAge: 15 * 60 * 1000
  }
});

export function fetchOrders(options) {
  return axios
    .get("/orders", querystring.stringify(options))
    .then(({ data }) => data);
}
