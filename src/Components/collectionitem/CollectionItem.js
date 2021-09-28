import React from "react";
import styles from "./CollectionItem.module.scss";
import InvButton from "../button/InvButton";

const CollectionItem = ({ id, name, imageUrl, price }) => {
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
        <InvButton>Add to Cart</InvButton>
      </div>
    </div>
  );
};

export default CollectionItem;
