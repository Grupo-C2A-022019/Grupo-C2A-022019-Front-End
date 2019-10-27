import React, { createContext, useCallback } from "react";

import useApi from "hooks/useApi";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ shoppingCart, addToCart, children }) {
  const api = useApi();
  const createOrder = useCallback(() => api.createOrder(shoppingCart), [
    api,
    shoppingCart
  ]);

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, createOrder }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
