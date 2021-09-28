import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/logo/shopping-bag.svg";
import styles from "./CartIcon.module.scss";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/actions/cart.actions";
import { selectCartItemsCount } from "../../redux/services/cart.selector";
const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className={styles.cartIcon} onClick={toggleCartHidden}>
      <ShoppingIcon className={styles.shoppingIcon} />
      <span className={styles.iconCount}>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
