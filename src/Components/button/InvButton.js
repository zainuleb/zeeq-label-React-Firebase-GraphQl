import React from "react";
import styles from "./InvButton.module.scss";

const InvButton = ({ children, inverted, ...otherProps }) => {
  return (
    <button className={styles.customInvButton} {...otherProps}>
      {children}
    </button>
  );
};

export default InvButton;
