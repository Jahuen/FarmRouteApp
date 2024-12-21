import React from 'react';
import styles from '../ProfileLayout.module.css';

export const NavigationBar = () => {
  const navItems = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/56a550bb1ac53ad016222736a14340fae84c7539d85bd5947d96ae620c0b1a9e?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Profile", isActive: true },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a66796e2fb80cb7fdfe613a4d7576148a4447c30365d22802ec959e9b10521f7?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Buy", isActive: false },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/da15ae5efbacd7d8d03eab81bb0d8875c1144f6c393711444fbe9a9fa5fe7eca?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", label: "Sell", isActive: false }
  ];

  return (
    <div className={styles.navigationBar}>
      <div className={styles.navContent}>
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
            <div
              key={index}
              className={item.isActive ? styles.activeNavLabel : ''}
              role="button"
              tabIndex={0}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.searchText} role="button" tabIndex={0}>Search</div>
    </div>
  );
}