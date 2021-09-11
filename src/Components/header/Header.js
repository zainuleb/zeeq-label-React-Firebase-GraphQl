import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../../assets/logo/zeeqlogo.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logoContainer} to="/">
        <Logo className={styles.logo} />
      </Link>
      <div className={styles.navOptions}>
        <Link className={styles.option} to="/shop">
          Shop
        </Link>
        <Link className={styles.option} to="/contact">
          Contact
        </Link>
        <Link className={styles.option} to="/sign">
          Sign In/Up
        </Link>
      </div>
    </div>
  );
};

export default Header;
