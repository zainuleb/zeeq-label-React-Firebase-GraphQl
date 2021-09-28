import React from "react";
import styles from "./CollectionItem.module.scss";
import InvButton from "../button/InvButton";

import { connect } from "react-redux";
import { addItem } from "../../redux/actions/cart.actions.js";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  console.log(addItem);
  return (
    <div className={styles.collectionItem}>
      <div
        className={styles.itemImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.itemFooter}>
        <span className={styles.itemName}>{name} </span>
        <span className={styles.itemPrice}>{price} </span>
      </div>
      <div className={styles.invBtn}>
        <InvButton onClick={() => addItem(item)}>Add to Cart</InvButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
