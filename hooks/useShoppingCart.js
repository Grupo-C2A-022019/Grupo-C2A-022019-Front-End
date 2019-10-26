import { useContext } from "react";

import ShoppingCartContext from "contexts/shoppingCart";

export default function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
