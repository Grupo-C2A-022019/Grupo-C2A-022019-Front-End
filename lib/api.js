import { create } from "axios";
import querystring from "querystring";
import getConfig from "next/config";

const baseURL = getConfig().publicRuntimeConfig.apiUrl;

const axios = create({
  baseURL
});

export function fetchOrders(options) {
  return axios
    .get("/orders", querystring.stringify(options))
    .then(({ data }) => data);
}
