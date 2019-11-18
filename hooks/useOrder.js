import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useOrder(id) {
  const [order, setOrder] = useState();

  const api = useApi();
  useEffect(() => {
    api.fetchOrder(id).then(setOrder);
  }, [api, id]);

  return [order];
}
