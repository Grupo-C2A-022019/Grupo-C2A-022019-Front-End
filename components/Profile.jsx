import React from "react";
import MonetaryAmount from "./commons/MonetaryAmount";

export default function Profile({
  name,
  email,
  image,
  balance: { amount, currency }
}) {
  return (
    <h1>
      {name}
      {email}
      <img alt="" src={image} />
      <div>
        <MonetaryAmount amount={amount} currency={currency} />
      </div>
    </h1>
  );
}
