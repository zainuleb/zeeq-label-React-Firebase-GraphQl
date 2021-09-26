import React from "react";
import styles from "./FormInput.module.scss";

const FormInput = ({ handleChange, label, value, ...otherProps }) => {
  return (
    <div className={styles.group}>
      <input
        className={styles.formInput}
        onChange={handleChange}
        value={value}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${styles.formInputLabel}
          ${value.length ? "shrink" : ""} `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
