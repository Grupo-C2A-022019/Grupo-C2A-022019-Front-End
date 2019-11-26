import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";

import MonetaryAmount from "components/commons/MonetaryAmount";
import I18n from "components/commons/I18n";
import Rating from "components/commons/RatingInput";

export default function StatementList({ statements }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <I18n id="statement.description.label" />
          </TableCell>
          <TableCell>
            <I18n id="statement.amount.label" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {statements.map(({ amount: { currency, amount }, description, id }) => (
          <TableRow key={id}>
            <TableCell>
              <Typography>{description}</Typography>
            </TableCell>
            <TableCell>
              <MonetaryAmount currency={currency} amount={amount} />
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
