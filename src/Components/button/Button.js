import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={styles.customButton} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
