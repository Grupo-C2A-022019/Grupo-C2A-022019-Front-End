import { create } from "axios";
import querystring from "querystring";

const axios = create({
  baseURL: "/api"
});

export function fetchOrders(options) {
  return axios
    .get("/orders", querystring.stringify(options))
    .then(({ data }) => data);
}
