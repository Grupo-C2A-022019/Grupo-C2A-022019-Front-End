import React, { useCallback } from "react";
import { Container, Button, Grid, Paper, Typography } from "@material-ui/core";

import { useRouter } from "next/router";

import ToolBar from "components/ToolBar";
import I18n from "components/commons/I18n";
import MonetaryAmount from "components/commons/MonetaryAmount";
import Image from "components/commons/Image";

import useMenu from "hooks/useMenu";
import useShoppingCart from "hooks/useShoppingCart";

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
              <Typography variant="h3">{menu.name}</Typography>
              <Typography variant="h4">{menu.description}</Typography>
              <Image src={menu.img} alt="menu" />
            </>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Paper>
          {menu && (
            <>
              <Typography>
                <I18n id="menu.listPrice.label" />
              </Typography>
              <MonetaryAmount
                currency={menu.listPrice.currency}
                amount={menu.listPrice.amount}
              />
              {menu.discountedPrice && (
                <>
                  <Typography>
                    <I18n id="menu.discountedPrice.label" />
                  </Typography>
                  <MonetaryAmount
                    currency={menu.discountedPrice.currency}
                    amount={menu.discountedPrice.amount}
                  />
                </>
              )}
              <AddToCartButton menu={menu} />
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

function AddToCartButton({ menu }) {
  const { addToCart } = useShoppingCart();

  const addMenuToCart = useCallback(() => {
    addToCart(menu);
  }, [addToCart, menu]);

  return (
    <Button onClick={addMenuToCart} variant="contained" color="primary">
      <I18n id="menu.addToCart" />
    </Button>
  );
}
