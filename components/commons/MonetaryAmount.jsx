import React from "react";
import { string, number } from "prop-types";
import { Typography } from "@material-ui/core";

import useI18n from "hooks/useI18n";

export default function MonetaryAmount({ currency, amount }) {
  const { currentLang } = useI18n();

  return (
    <Typography color={amount < 0 ? "error" : "textPrimary"}>
      <b>
        {new Intl.NumberFormat(currentLang, {
          style: "currency",
          currency
        }).format(amount)}
      </b>
    </Typography>
  );
}

MonetaryAmount.propTypes = {
  currency: string.isRequired,
  amount: number.isRequired
};

MonetaryAmount.defaultProps = {};
