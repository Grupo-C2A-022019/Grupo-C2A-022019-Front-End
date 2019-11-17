import React, { useState, useCallback } from "react";
import {
  Container,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Grid,
  Paper
} from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import { useRouter } from "next/router";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";
import MonetaryAmount from "components/commons/MonetaryAmount";

import useShoppingCart from "hooks/useShoppingCart";

export default function ShoppingCartPage() {
  return (
    <>
      <ToolBar />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <Paper>
              <ShoppingCart />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <AccountResume />
              <OrderButton />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

ShoppingCartPage.propTypes = {};

ShoppingCartPage.defaultProps = {};

function ShoppingCart() {
  const { shoppingCart } = useShoppingCart();

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>
            <Typography>
              <I18n id="shoppingCart.menu.name" />
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              <I18n id="shoppingCart.menu.amount" />
            </Typography>
          </TableCell>
          <TableCell>
            <Typography>
              <I18n id="shoppingCart.menu.listPrice" />
            </Typography>
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.values(shoppingCart).map(
          ({ amount, menu: { id, name, listPrice } }) => (
            <TableRow>
              <TableCell>
                <Typography>{name}</Typography>
              </TableCell>
              <TableCell>
                <Typography>{amount}</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  <MonetaryAmount
                    currency={listPrice.currency}
                    amount={listPrice.amount}
                  />
                </Typography>
              </TableCell>
              <TableCell>
                <RemoveMenuButton id={id} />
              </TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
}

function RemoveMenuButton({ id }) {
  const { remove } = useShoppingCart();

  const removeMenuFromCart = useCallback(() => {
    remove({ id });
  }, [id, remove]);

  return (
    <Button onClick={removeMenuFromCart}>
      <Close />
    </Button>
  );
}

function AccountResume() {
  return <div>Account Details</div>;
}

function OrderButton() {
  const { push } = useRouter();
  const { createOrder, clear } = useShoppingCart();

  const [disabled, setDisabled] = useState(false);

  const placeOrder = useCallback(() => {
    setDisabled(true);
    createOrder()
      .then(([{ id }]) => {
        push(`/orders/${id}`);
      })
      .then(clear)
      .catch(e => {
        setDisabled(false);
        throw e;
      });
  }, [createOrder, clear, push]);

  return (
    <Button
      onClick={placeOrder}
      variant="contained"
      color="primary"
      disabled={disabled}
    >
      <I18n id="cart.order" />
    </Button>
  );
}
