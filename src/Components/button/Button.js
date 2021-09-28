import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${styles.customButton} {${inverted}?${styles.inverted} : ""}}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
