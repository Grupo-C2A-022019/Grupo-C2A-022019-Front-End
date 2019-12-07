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

export default function StatementList({ menus }) {
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
            <I18n id="menus.name.label" />
          </TableCell>
          <TableCell>
            <I18n id="menus.price.label" />
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {menus.map(({ listPrice: { currency, amount }, name, id, img }) => (
          <TableRow key={id}>
            <TableCell>
              <Typography>{name}</Typography>
            </TableCell>
            <TableCell>
              <MonetaryAmount currency={currency} amount={amount} />
            </TableCell>
            <TableCell>
              <Rating id={id} />
            </TableCell>
            <TableCell>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src={img}
                className={classes.bigAvatar}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
