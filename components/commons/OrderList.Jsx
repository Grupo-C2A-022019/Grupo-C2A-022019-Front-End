import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import MonetaryAmount from "components/commons/MonetaryAmount";
import I18n from "components/commons/I18n";
import Rating from "components/commons/RatingInput";

export default function OrderList({ Orders }) {
    const useStyles = makeStyles({
        avatar: {
          margin: 10
        },
        bigAvatar: {
          margin: 10,
          width: 60,
          height: 60
        }
      });

      const classes = useStyles();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <I18n id="statement.name.label" />
          </TableCell>
          <TableCell>
            <I18n id="statement.amount.label" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Orders.map(({ menu: { name, listPrice:{amount,currency},img }, description, id }) => (
          <TableRow key={id}>
            <TableCell>
              <Typography>{name}</Typography>
            </TableCell>
            <TableCell>
              <MonetaryAmount currency={currency} amount={amount} />
            </TableCell>
            <TableCell></TableCell>
            <TableCell>
                <Avatar alt="Remy Sharp" src={img} className={classes.bigAvatar} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}