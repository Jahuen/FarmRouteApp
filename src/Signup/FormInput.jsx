import React from 'react';
import styles from './Signup.module.css';

export const FormInput = ({ label, type = "text", id, optional = false }) => {
  return (
    <>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
        {optional && <span className={styles.optionalText}>(Optional)</span>}
      </label>
      <input
        type={type}
        id={id}
        className={styles.inputField}
        aria-label={label}
        required={!optional}
      />
    </>
  );
};