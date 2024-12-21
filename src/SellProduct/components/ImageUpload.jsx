import React from 'react';
import styles from '../styles/ImageUpload.module.css';

export const ImageUpload = () => {
  return (
    <div className={styles.uploadContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d141e481a5e61d1b982402101996ed0eaed0dbd7e04972dd6b05aa9590bd9ee?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
        className={styles.uploadImage}
        alt=""
      />
      <div className={styles.uploadText}>Add Photo</div>
    </div>
  );
};