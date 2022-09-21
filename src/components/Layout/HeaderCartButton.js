import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemsCount = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.CartIcon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styles.badge}> {cartItemsCount} </span>
    </button>
  );
};

export default HeaderCartButton;
