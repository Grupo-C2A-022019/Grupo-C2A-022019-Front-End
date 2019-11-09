import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

export default function StatementList({ statements }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>foo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {statements.map(statement => (
          <TableRow>
            <TableCell>
              {statement.invoice.total.amount}
              {statement.invoice.total.currency}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
