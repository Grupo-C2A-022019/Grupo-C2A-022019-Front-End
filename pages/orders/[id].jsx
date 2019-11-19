import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";

import dynamic from "next/dynamic";
import Balance from "components/Perfil/Balance";
import ToolBar from "components/ToolBar";
import useOrder from "hooks/useOrder";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
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

  const OpenStreetMap = dynamic(() => import("components/OpenStreetMap"), {
    ssr: false
  });

  return (
    <Grid>
    <Typography gutterBottom variant="h2" component="h1">
      Orden:
    </Typography>
    <Grid container direction="row"  justify="flex-start">
      <Card className={classes.card}>
              {order &&(
              <CardMedia
                className={classes.media}
                image={order.menu.img}
                title={order.menu.name}
              />
              )}
              {order &&(
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {order.menu.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {order.menu.description}
              </Typography>
            </CardContent>
        )}
      </Card>
        {order&&(
        <Balance
            amount={order.amount}
            title="Cantidad:"
          /> 
        )}
        {order &&
          <div style={{ height: "30vh", display: "grid",width:"25%" }}>
            <OpenStreetMap lat={order.lat} lng={order.lng} />
          </div>
        }
    </Grid> 
    </Grid>
  );
}
