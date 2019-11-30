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

export default function StatementList({ menus }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <I18n id="menus.name.label" />
          </TableCell>
          <TableCell>
            <I18n id="menus.description.label" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {menus.map(({ listPrice: { currency, amount }, description, id }) => (
          <TableRow key={id}>
            <TableCell>
              <Typography>{description}</Typography>
            </TableCell>
            <TableCell>
              <MonetaryAmount currency={currency} amount={amount} />
            </TableCell>
            <TableCell>
              <Rating id={id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
