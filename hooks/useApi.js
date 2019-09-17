import { useContext } from "react";

import ApiContext from "contexts/api";

export default function useApi() {
  return useContext(ApiContext);
}
