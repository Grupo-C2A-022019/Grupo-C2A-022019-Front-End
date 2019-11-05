import React, { useCallback } from "react";
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
  const { shoppingCart, createOrder } = useShoppingCart();

  return (
    <Button onClick={createOrder} variant="contained" color="primary">
      <I18n id="cart.order" />
    </Button>
  );
}
