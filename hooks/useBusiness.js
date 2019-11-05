import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useBusiness(id) {
  const [business, setBusiness] = useState();

  const api = useApi();

  useEffect(() => {
    api.fetchBusiness(id).then(setBusiness);
  }, [api, id]);

  return [business];
}
