import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${styles.customButton} {${isGoogleSignIn}?${styles.googleSignIn}:''}}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
