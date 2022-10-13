import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Checkout from "./components/Cart/Checkout";
import CartProvider from "./store/CartProvider";
import { useState } from "react";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderWindowShown, setOrderWindowShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
    setOrderWindowShown(false);
  };
  const toggleOrderHandler = () => {
    setOrderWindowShown(true);
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onClose={hideCartHandler} toggleOrder={toggleOrderHandler} />
      )}
      {orderWindowShown && (
        <Checkout
          onClose={hideCartHandler}
          goBack={() => {
            setCartIsShown(true);
            setOrderWindowShown(false);
          }}
        />
      )}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
