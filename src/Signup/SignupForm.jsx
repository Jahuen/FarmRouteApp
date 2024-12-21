import React from 'react';
import { FormInput } from './FormInput';
import styles from './Signup.module.css';

const formFields = [
  { label: 'First Name', id: 'firstName' },
  { label: 'Middle Name', id: 'middleName', optional: true },
  { label: 'Last Name', id: 'lastName' },
  { label: 'Email Address', id: 'email', type: 'email' },
  { label: 'Contact Number', id: 'contact', type: 'tel' },
  { label: 'Password', id: 'password', type: 'password' }
];

export const SignupForm = () => {
  return (
    <div className={styles.container}>
      <form className={styles.formWrapper}>
        <h1 className={styles.formTitle}>SIGN UP</h1>
        
        {formFields.map((field) => (
          <FormInput
            key={field.id}
            label={field.label}
            id={field.id}
            type={field.type}
            optional={field.optional}
          />
        ))}

        <div className={styles.termsContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4018bc5a3c5086c2cb5b39f562fcef16358be90e3200b776297f72f864d025a5?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            className={styles.termsIcon}
            alt=""
          />
          <p className={styles.termsText}>
            By logging in, you are agree to our
            <br />
            <span className={styles.termsLink}>terms and conditions</span> and
            <span className={styles.termsLink}>privacy policy</span>
          </p>
        </div>

        <button type="submit" className={styles.submitButton}>
          SIGN UP
        </button>
      </form>
    </div>
  );
};