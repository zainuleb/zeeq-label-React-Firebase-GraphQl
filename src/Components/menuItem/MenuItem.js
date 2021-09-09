import React from 'react';
import styles from './MenuItem.module.scss';
import { withRouter } from 'react-router';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${styles.menuItem} ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
