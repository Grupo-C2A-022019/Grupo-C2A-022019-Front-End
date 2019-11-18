import React, { useCallback } from "react";
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";
import MonetaryAmount from "components/commons/MonetaryAmount";
import Image from "components/commons/Image";

import useMenu from "hooks/useMenu";
import useApi from "hooks/useApi";

import routes from "constants/routes";

export default function Menu() {
  const {
    query: { id }
  } = useRouter();
  return (
    <>
      <ToolBar />
      <Container>
        <MenuDetails id={id} />
      </Container>
    </>
  );
}

function MenuDetails({ id }) {
  const [menu] = useMenu(id);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={9}>
        <Paper>
          {menu && (
            <>
              <Image src={menu.img} alt="menu" height="15em" />
              <Typography variant="h3">{menu.name}</Typography>
              <Typography variant="h4">{menu.description}</Typography>
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper>
          {menu && (
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Typography>
                  <I18n id="menu.listPrice.label" />
                </Typography>
                <MonetaryAmount
                  currency={menu.listPrice.currency}
                  amount={menu.listPrice.amount}
                />
              </Grid>

              {menu.discountedPrice && (
                <Grid item>
                  <Typography>
                    <I18n id="menu.discountedPrice.label" />
                  </Typography>
                  <MonetaryAmount
                    currency={menu.discountedPrice.currency}
                    amount={menu.discountedPrice.amount}
                  />
                </Grid>
              )}
              <Grid item>
                <Order menuId={id} />
              </Grid>
            </Grid>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

function Order({ menuId }) {
  const { push } = useRouter();
  const api = useApi();
  const placeOrder = useCallback(
    (order, { setSubmitting }) => {
      api
        .createOrder(order)
        .then(({ id }) => {
          push(routes.order(id));
        });
    },
    [api, push]
  );

  return (
    <Formik initialValues={{ menu:{id:menuId}, amount: 1 }} onSubmit={placeOrder}>
      <Form>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Field name="amount" component={OrderAmountField} />
          </Grid>
          <Grid item container justify="center">
            <Button type="submit" variant="contained" color="primary">
              <I18n id="menu.order" />
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

function OrderAmountField({ field: { name, value }, form: { setFieldValue } }) {
  const add = useCallback(() => {
      setFieldValue(name, value + 1);
  }, [setFieldValue, name, value])

  const sub = useCallback(() => {
    setFieldValue(name, value - 1);
  }, [setFieldValue, name, value])

  return (
    <Grid container alignItems="center" justify="space-between">
      <Grid item>
        <Button onClick={sub}>-</Button>
      </Grid>
      <Grid item>{value}</Grid>
      <Grid item>
        <Button onClick={add}>+</Button>
      </Grid>
    </Grid>
  );
}
