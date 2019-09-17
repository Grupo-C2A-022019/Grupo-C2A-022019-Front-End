import { useState, useEffect } from "react";

import useApi from "./useApi";

/**
 *
 * @param {{offset: number, size: number}} options
 */
export default function useOrders(options) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const api = useApi();

  useEffect(() => {
    setLoading(true);
    api
      .fetchOrders(options)
      .then(newOrders => {
        setOrders(newOrders);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(e);
      });
  }, [api, options]);

  return [
    orders,
    {
      error,
      loading
    }
  ];
}
