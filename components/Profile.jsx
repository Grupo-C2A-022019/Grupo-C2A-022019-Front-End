import React from "react";
import MonetaryAmount from "./commons/MonetaryAmount";
import Balance from "./Perfil/Balance";
import MenuPendingList from "components/commons/MenuPendingList";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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

export default function Profile({
  name,
  email,
  image,
  balance,
  ratingPendings
}) {
  const classes = useStyles();

  return (
    <Grid>
      <Grid container>
        <Grid container item xs="6" justify="left" alignItems="left">
          <Avatar alt="Remy Sharp" src={image} className={classes.bigAvatar} />
        </Grid>
        <Grid container item xs="6" alignItems="flex-start" justify="flex-end">
          {balance && (
            <Balance
              amount={balance.amount}
              currency={balance.currency}
              title="Billetera"
              leyenda="Historial de compra"
            />
          )}
        </Grid>
      </Grid>
      <Grid container item justify="left" alignItems="left">
        <Typography component="h2" variant="h6" color="black" gutterBottom>
          Nombre: {name}
        </Typography>
      </Grid>
      <Grid container item>
        <Typography component="h2" variant="h6" color="black" gutterBottom>
          Email: {email}
        </Typography>
      </Grid>
      <MenuPendingList menus={ratingPendings} />
    </Grid>
  );
}
