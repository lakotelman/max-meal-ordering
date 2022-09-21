import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnBump, setBtnBump] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnBump(true);
    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const buttonClasses = `${styles.button} ${btnBump ? styles.bump : ""}`;

  const cartItemsCount = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);
  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={styles.CartIcon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={styles.badge}> {cartItemsCount} </span>
    </button>
  );
};

export default HeaderCartButton;
