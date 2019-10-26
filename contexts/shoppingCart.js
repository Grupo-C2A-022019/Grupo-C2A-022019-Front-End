import React, { createContext } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ shoppingCart, addToCart, children }) {
  return (
    <ShoppingCartContext.Provider value={{ shoppingCart, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContext;
