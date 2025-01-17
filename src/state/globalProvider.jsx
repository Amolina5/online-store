import { useState } from 'react';
import { GlobalContext } from './globalContext';

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Alex Molina", id: 27 });

  function addProductToCart(prod) {
    console.log("Global Add", prod);
    setCart(prevCart => [...prevCart, prod]);
  }

  function clearCart() {
    setCart([]);
  }

  function removeProductFromCart(prodId) {
    setCart(prevCart => prevCart.filter(product => product.id !== prodId));
  }

  return (
    <GlobalContext.Provider value={{
      cart: cart,
      user: user,
      addProductToCart: addProductToCart,
      clearCart: clearCart,
      removeProductFromCart: removeProductFromCart
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;