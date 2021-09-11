import React from 'react';
import styles from './PreviewCollection.module.scss';

import CollectionItem from '../collectionitem/CollectionItem';

const PreviewCollection = ({ title, items }) => {
  return (
    <div className={styles.collectionPreview}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.preview}>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
