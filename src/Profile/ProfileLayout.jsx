import React from 'react';
import styles from './ProfileLayout.module.css';
import { NavigationBar } from './components/NavigationBar';
import { SettingsMenu } from './components/SettingsMenu';

export const ProfileLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <div className={styles.headerContainer}>
          <div className={styles.titleWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b851367f802b5292cf09a7c78d99b6909f607634482a2ecf04556964a267433e?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              alt="Profile header icon"
              className={styles.icon}
            />
            <div className={styles.profileTitle}>Profile</div>
          </div>
          
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3fd6b2c65a6ee92bebdce74dd98de92176fe2bce416bb5509f7777d597ce8b?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            alt="User avatar"
            className={styles.avatarImage}
          />
          <div className={styles.userName}>John Doe</div>
          <div className={styles.userEmail}>name@gmail.com</div>
          
          <SettingsMenu />
          
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6c3cea230af43016c4aaaf6b49baee11f1d4d038b01be2be60fb26c905a88?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            alt="Bottom logo"
            className={styles.bottomLogo}
          />
        </div>
        
        <NavigationBar />
      </div>
    </div>
  );
}