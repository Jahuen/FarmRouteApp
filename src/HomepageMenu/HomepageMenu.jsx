import * as React from "react";
import styles from './HomepageMenu.module.css';

export default function HomepageMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.menuWrapper}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aad22c68f44e0ffc10e7a492a5a48b71afdd9b9f3bfe628beb14b019096d7059?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
          className={styles.menuImage}
          alt="Homepage menu display"
        />
      </div>
    </div>
  );
}