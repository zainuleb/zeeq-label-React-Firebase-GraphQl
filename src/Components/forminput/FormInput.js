import React from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${styles.formInputLabel} ${otherProps.value.length}? ${styles.shrink}:''`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
/*  */
