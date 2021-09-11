import React from 'react';
import styles from './CollectionItem.module.scss';

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
    </div>
  );
};

export default CollectionItem;
