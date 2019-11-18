import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";


import Balance from "components/Perfil/Balance";
import ToolBar from "components/ToolBar";
import useOrder from "hooks/useOrder";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Order() {
  const {
    query: { id }
  } = useRouter();
  return (
    <>
      <ToolBar />
      <Container>
        <OrderDetails id={id} />
      </Container>
    </>
  );
}

function OrderDetails({id}) {
  const [order] = useOrder(id);
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="space-around" alignItems="stretch">
        <Grid xs="6">  
              {order &&(
              <CardMedia
                className={classes.media}
                image={order.menu.img}
                title={order.menu.name}
              />
              )}
        </Grid>
        <Card className={classes.card}>
        {order &&(
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {order.menu.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {order.menu.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cantidad:{order.amount}
              </Typography>
            </CardContent>
        )}
        </Card>
        {order&&(
        <Balance
            amount={order.amount}
            title="Cantidad"
          /> 
        )} 
   </Grid> 
  );
}
