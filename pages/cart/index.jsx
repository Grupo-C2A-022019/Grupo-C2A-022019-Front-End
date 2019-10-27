import React from "react";
import { Container, Button } from "@material-ui/core";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";

import useShoppingCart from "hooks/useShoppingCart";

export default function ShoppingCartPage() {
  return (
    <>
      <ToolBar />
      <Container>
        <ShoppingCart />
        <OrderButton />
      </Container>
    </>
  );
}

ShoppingCartPage.propTypes = {};

ShoppingCartPage.defaultProps = {};

function ShoppingCart() {
  const { shoppingCart } = useShoppingCart();

  return (
    <div>
      {shoppingCart.map(menu => (
        <div key={menu.id}>
          <div>{menu.name}</div>
          <div>{menu.description}</div>
          <div>{menu.name}</div>
          <div>list price</div>
          <div>
            {menu.listPrice.currency} {menu.listPrice.amount}
          </div>
        </div>
      ))}
    </div>
  );
}

function OrderButton() {
  const { shoppingCart, createOrder } = useShoppingCart();

  return (
    <Button onClick={createOrder} variant="contained" color="primary">
      <I18n id="cart.order" />
    </Button>
  );
}
