import React from "react";
import { connect } from "react-redux";

import CartItem from "../cartItem/CartItem.js";

import Button from "../button/Button";
import styles from "./CartDropDown.module.scss";

const CartDropDown = ({ cartItems }) => {
  console.log(cartItems);
  return (
    <div className={styles.cartDropdown}>
      <div className={styles.cartItems}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
