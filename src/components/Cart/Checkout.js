import Modal from "../UI/Modal";
import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const notFiveChars = (value) => value.trim().length !== 5;

const Checkout = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    city: true,
    postal: true,
  });
  const nameRef = useRef();
  const streetRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const nameInput = nameRef.current.value;
    const streetInput = streetRef.current.value;
    const postalInput = postalRef.current.value;
    const cityInput = cityRef.current.value;

    const nameInputValid = !isEmpty(nameInput);
    const streetInputValid = !isEmpty(streetInput);
    const postalInputValid = !notFiveChars(postalInput);
    const cityInputValid = !isEmpty(cityInput);

    const formIsValid =
      nameInputValid && streetInputValid && postalInputValid && cityInputValid;

    if (!formIsValid) {
      return;
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <form className={styles.form} onSubmit={confirmHandler}>
        <div className={styles.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" ref={streetRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="postal">Postal Code</label>
          <input type="text" id="postal" ref={postalRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="city">City</label>
          <input type="text" id="city" ref={cityRef} />
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={props.goBack}>
            Back to Cart
          </button>
          <button className={styles.submit} type="submit">
            Submit Order
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Checkout;
