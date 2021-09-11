import React from 'react';
import styles from './Shop.module.scss';
import shopData from '../../Data/shopData.js';
import PreviewCollection from '../../Components/previewCollection/PreviewCollection.js';

const Shop = () => {
  const collections = shopData;

  return (
    <div className={styles.shopPage}>
      <h1 className={styles.header}>Collections</h1>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
