import React from 'react';
import styles from './MenuItem.module.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${styles.menuItem} ${size}`}>
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage:
            'url(' +
            require(`../../assets/directory/${imageUrl}`).default +
            ')',
        }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
