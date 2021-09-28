import React from "react";
import Button from "../button/Button";
import styles from "./CartDropDown.module.scss";

const CartDropDown = () => {
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems} />
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
