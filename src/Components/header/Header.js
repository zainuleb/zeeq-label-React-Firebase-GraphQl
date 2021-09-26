import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../db/firebase/firebase.utils";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo/zeeqlogo.svg";

const Header = ({ currentUser }) => {
  useEffect(() => {}, [currentUser]);

  let signBtn = (
    <Link className={styles.option} to="/sign">
      Sign In/Up
    </Link>
  );

  if (currentUser !== null && currentUser.currentUser !== null) {
    signBtn = (
      <Link className={styles.option} to="/" onClick={() => auth.signOut()}>
        Sign Out
      </Link>
    );
  }
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
        {signBtn}
      </div>
    </div>
  );
};

export default Header;
