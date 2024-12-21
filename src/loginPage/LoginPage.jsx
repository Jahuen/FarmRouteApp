import React from 'react';
import { Button } from './components/Button';
import { InputField } from './components/InputField';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.welcomeText}>
        <span className={styles.welcomeSmall}>Welcome to</span>
        <br />
        <span className={styles.welcomeLarge}>Farm Route</span>
      </div>

      <div className={styles.guestSection}>
        <div className={styles.guestText}>
          Continue as <span className={styles.guestHighlight}>Guest</span>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/575c3e157b566b1a32ef28ef270e5d4ae51dd98f9e1942127c1741223796c43b?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
          className={styles.guestIcon}
          alt=""
        />
      </div>

      <form className={styles.formContainer}>
        <InputField
          label="Email Address/Mobile Number"
          type="text"
          id="email"
          placeholder="Enter email or mobile number"
        />
        <InputField
          label="Password"
          type="password"
          id="password"
          placeholder="Enter password"
        />
      </form>

      <button className={styles.forgotPassword}>Forgot password?</button>

      <div className={styles.termsSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4018bc5a3c5086c2cb5b39f562fcef16358be90e3200b776297f72f864d025a5?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
          className={styles.termsIcon}
          alt=""
        />
        <div>
          By logging in, you are agree to our <br />
          <a href="#" className={styles.termsLink}>terms and conditions</a> and{' '}
          <a href="#" className={styles.termsLink}>privacy policy</a>
        </div>
      </div>

      <Button>LOGIN</Button>

      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div>OR</div>
        <div className={styles.dividerLine} />
      </div>

      <Button>SIGN IN WITH GOOGLE</Button>

      <div className={styles.signupText}>
        Dint have an account?{' '}
        <a href="#" className={styles.signupLink}>Sign Up</a>
      </div>
    </div>
  );
};