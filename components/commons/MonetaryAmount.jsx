import React from "react";
import { string, number } from "prop-types";
import { Typography } from "@material-ui/core";

export default function MonetaryAmount({ lang, currency, amount }) {
  return (
    <Typography color={amount < 0 ? "error" : "textPrimary"}>
      <b>
        {new Intl.NumberFormat(lang, { style: "currency", currency }).format(
          amount
        )}
      </b>
    </Typography>
  );
}

MonetaryAmount.propTypes = {
  lang: string,
  currency: string.isRequired,
  amount: number.isRequired
};

MonetaryAmount.defaultProps = {
  lang: "es-AR"
};
