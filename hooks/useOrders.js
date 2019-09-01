import { useState, useEffect } from "react";

import { fetchOrders } from "lib/api";

/**
 *
 * @param {{offset: number, size: number}} options
 */
export default function useOrders(options) {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    fetchOrders(options)
      .then(newOrders => {
        setOrders(newOrders);
        setLoading(false);
      })
      .catch(e => {
        setLoading(false);
        setError(e);
      });
  }, [options]);

  return [
    orders,
    {
      error,
      loading
    }
  ];
}
