import React from 'react';
import styles from './Homepage.module.scss';

import Directory from '../../Components/directory/Directory';

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <Directory />
    </div>
  );
};

export default Homepage;

/*       <div className={styles.directoryMenu}>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hats</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>SNEAKERS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>JACKETS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>WOMENS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.content}>
            <h1 className={styles.title}>MENS</h1>
            <span className={styles.subtitle}>SHOP NOW</span>
          </div>
        </div>
      </div>;
 */
