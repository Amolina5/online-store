import { createContext } from "react";

export const GlobalContext = createContext({
  cart: [],
  user: { name: "", id: null },
  addProductToCart: () => {},
  clearCart: () => {},
  removeProductFromCart: () => {}
});
