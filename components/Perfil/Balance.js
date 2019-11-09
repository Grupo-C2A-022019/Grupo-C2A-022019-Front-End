import React from "react";
import NextLink from "next/link";

import routes from "constants/routes";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 275
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

export default function Balance({ amount, currency }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Billetera
        </Typography>
        <Typography variant="h5" component="h2">
          {amount}
        </Typography>
      </CardContent>
      <CardActions>
        <NextLink href={routes.statements}>
          <Button size="small">Historial de compras</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}
