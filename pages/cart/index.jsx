import React, { useCallback, useEffect, useState } from "react";
import { string, bool, func } from "prop-types";
import ToolBar from "components/ToolBar";
import { Container } from "@material-ui/core";
import useShoppingCart from "hooks/useShoppingCart";

export default function ShoppingCartPage() {
  return (
    <>
      <ToolBar />
      <Container>
        <ShoppingCart />
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
