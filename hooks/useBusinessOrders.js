import { useState, useEffect } from "react";
import useApi from "./useApi";

export default function useBusiness(id) {
  const [orders, setOrders] = useState();

  const api = useApi();

  useEffect(() => {
    api.fetchBusinessOrders(id).then(setOrders);
  }, [api, id]);

  return [orders];
}
