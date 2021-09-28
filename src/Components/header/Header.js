import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { auth } from "../../db/firebase/firebase.utils";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../assets/logo/zeeqlogo.svg";
import CartIcon from "../cartIcon/CartIcon";
import CartDropDown from "../cartDropDown/CartDropDown";

const Header = ({ currentUser, hidden }) => {
  let signBtn = (
    <Link className={styles.option} to="/sign">
      Sign In/Up
    </Link>
  );

  if (currentUser !== null && currentUser.currentUser !== null) {
    signBtn = (
      <>
        <CartIcon />
        {/*  <Link className={styles.option} to="/" currentUser={currentUser}> */}

        {/*    </Link> */}
        <Link className={styles.option} to="/" onClick={() => auth.signOut()}>
          Sign Out
        </Link>
      </>
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
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
