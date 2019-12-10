import React from "react";
import NextLink from "next/link";

import routes from "constants/routes";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MonetaryAmount from "components/commons/MonetaryAmount";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 300
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function Balance({ amount, currency, title, leyenda }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h3" component="h2">
          <MonetaryAmount currency={currency} amount={amount} />
        </Typography>
      </CardContent>
      <CardActions>
        <NextLink href={routes.statements}>
          <Button size="small">{leyenda}</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}
