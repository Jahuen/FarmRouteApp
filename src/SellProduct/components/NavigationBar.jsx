import React from 'react';
import styles from '../styles/NavigationBar.module.css';

const navItems = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/182ff88ce8876af4a933568b2053b47a11ec9f014ad61a2387ca4c0b6f425393?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Profile", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/97eeba211b45612cf68c2bb4ebcf7c7de946f6566cda0e87cf79173e0c96697a?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Buy", active: false },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16419357fcf42a45b5b78ea08cf9908608394e84013c2b5896fde496e05c92c8?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Sell", active: true }
];

export const NavigationBar = () => {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navContent}>
        <div className={styles.navItems}>
          {navItems.map((item, index) => (
            <div key={index} className={styles.navItem}>
              <img
                loading="lazy"
                src={item.icon}
                className={styles.navIcon}
                alt=""
              />
              <span className={`${styles.navLabel} ${item.active ? styles.active : ''}`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
    </nav>
  );
};