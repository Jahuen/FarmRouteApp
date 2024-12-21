import React from 'react';
import styles from '../ProfileLayout.module.css';

export const SettingsMenu = () => {
  const settingsOptions = [
    { label: "Profile Settings", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4a8ea170d16318d7eee44ad9e41e48a62d70df6a674e1aadc5d5149ced9420d?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0" },
    { label: "Change Password", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddcecc217662965d11cc5e34069488f41a22784c7a40e52d08b50399eb0a15c?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0" },
    { label: "Delete", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddcecc217662965d11cc5e34069488f41a22784c7a40e52d08b50399eb0a15c?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0" },
    { label: "Logout", icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9ddcecc217662965d11cc5e34069488f41a22784c7a40e52d08b50399eb0a15c?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0" }
  ];

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsOptions}>
        {settingsOptions.map((option, index) => (
          <div 
            key={index} 
            className={index > 0 ? styles.settingItem : ''}
            role="button"
            tabIndex={0}
          >
            {option.label}
          </div>
        ))}
      </div>
      <div className={styles.iconContainer}>
        {settingsOptions.map((option, index) => (
          <img
            key={index}
            loading="lazy"
            src={option.icon}
            alt={`${option.label} icon`}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );
}