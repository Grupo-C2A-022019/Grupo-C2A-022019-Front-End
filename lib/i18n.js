import { setup } from "axios-cache-adapter";

const axios = setup({
  cache: {
    maxAge: 15 * 60 * 1000
  }
});

export function getMessages(lang = "es") {
  return axios.get(`/static/messages_${lang}.json`).then(({ data }) => data);
}
