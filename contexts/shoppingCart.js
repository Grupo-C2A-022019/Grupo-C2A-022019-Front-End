import React, { createContext, useCallback } from "react";

import useApi from "hooks/useApi";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ shoppingCart, addToCart, remove, children }) {
  const api = useApi();
  const createOrder = useCallback(() => api.createOrder(shoppingCart), [
    api,
    shoppingCart
  ]);
 
  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, addToCart, createOrder, remove }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
