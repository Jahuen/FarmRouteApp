import React from 'react';
import styles from './InputField.module.css';

export const InputField = ({ label, type, id, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.input}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};