import React, { useCallback } from "react";
import { Container, Button } from "@material-ui/core";
import { useRouter } from "next/router";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";

import useMenu from "hooks/useMenu";
import useShoppingCart from "hooks/useShoppingCart";

export default function Menu() {
  const {
    query: { id }
  } = useRouter();

  const [menu] = useMenu(id);

  return (
    <>
      <ToolBar />
      <Container>{menu && <MenuDetails menu={menu} />}</Container>
    </>
  );
}

function MenuDetails({ menu }) {
  const { addToCart } = useShoppingCart();

  const addMenuToCart = useCallback(() => {
    addToCart(menu);
  }, [addToCart, menu]);

  return (
    <div>
      <div>{menu.name}</div>
      <div>{menu.description}</div>
      <div>{menu.name}</div>
      <div>list price</div>
      <div>
        {menu.listPrice.currency} {menu.listPrice.amount}
      </div>
      <Button onClick={addMenuToCart} variant="contained" color="primary">
        <I18n id="menu.addToCart" />
      </Button>
    </div>
  );
}
