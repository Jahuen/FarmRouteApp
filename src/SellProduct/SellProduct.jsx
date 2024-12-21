import React from 'react';
import styles from './styles/SellProduct.module.css';
import { ImageUpload } from './components/ImageUpload';
import { FormField } from './components/FormField';
import { NavigationBar } from './components/NavigationBar';

export const SellProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b851367f802b5292cf09a7c78d99b6909f607634482a2ecf04556964a267433e?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            className={styles.headerIcon}
            alt=""
          />
          <span>Sell Product</span>
        </div>

        <form>
          <ImageUpload />
          
          <FormField label="Product Name" placeholder="Enter name" />
          
          <div className={styles.categorySelect}>
            <span>Wheat</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec7bcc7fe0d756d96a1ce21225d5554caa130c56e07818a30faf9a28f23db712?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              className={styles.headerIcon}
              alt=""
            />
          </div>

          <FormField label="Quantity" placeholder="Enter Quantity" />
          <FormField label="Price" placeholder="Enter Price" />
          <FormField label="Available From" type="date" />
          <FormField label="Mobile Number" type="tel" />

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6c3cea230af43016c4aaaf6b49baee11f1d4d038b01be2be60fb26c905a88?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            className={styles.submitButton}
            alt="Submit"
            role="button"
            tabIndex={0}
          />
        </form>
      </div>
      
      <NavigationBar />
    </div>
  );
};