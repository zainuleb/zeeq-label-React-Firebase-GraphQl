import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import styles from "./CartIcon.module.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cart.actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.iconCount}>0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
