import React from 'react';
import styles from '../styles/FormField.module.css';

export const FormField = ({ label, inputType = "text", placeholder }) => {
  const inputId = `${label.toLowerCase().replace(/\s/g, '')}-input`;
  
  return (
    <div className={styles.fieldContainer}>
      <label htmlFor={inputId} className={styles.fieldLabel}>{label}</label>
      <input
        type={inputType}
        id={inputId}
        className={styles.fieldInput}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};