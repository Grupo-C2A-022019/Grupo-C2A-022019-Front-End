import React from "react";

import useOrders from "hooks/useOrders";

export default function Orders() {
  const [orders] = useOrders();

  return (
    <div>
      orders
      {orders.map((order, index) => (
        <h1 key={order.id}>
          {index}: {order.id}
        </h1>
      ))}
    </div>
  );
}
