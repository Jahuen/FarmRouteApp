import React from 'react';
import styles from './Store.module.css';

export const NavigationBar = () => {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/182ff88ce8876af4a933568b2053b47a11ec9f014ad61a2387ca4c0b6f425393?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Profile", active: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5547eb1b8bbfbfee5b6b9d99089541535ff9bec02033e7ee734827f9310b344?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Buy", active: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/94c05432329bc2f6f4f9f2c3fb78f047d7e2ba2289a2e1e12924e02f460251d3?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Sell", active: false }
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.navIcons}>
          {navItems.map((item, index) => (
            <img
              key={index}
              loading="lazy"
              src={item.icon}
              alt={`${item.label} icon`}
              className={styles.navIcon}
            />
          ))}
        </div>
        <div className={styles.navLabels}>
          {navItems.map((item, index) => (
            <div key={index} className={item.active ? styles.activeNavItem : ''}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.findProduceText}>Find Produce</div>
    </nav>
  );
};