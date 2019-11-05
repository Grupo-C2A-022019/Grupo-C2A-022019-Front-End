import React from "react";
import { string, number } from "prop-types";

export default function MonetaryAmount({ currency, amount }) {
  return (
    <>
      {currency} {amount}
    </>
  );
}

MonetaryAmount.propTypes = {
  currency: string.isRequired,
  amount: number.isRequired
};
