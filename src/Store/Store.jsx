import React from 'react';
import { ProductCard } from './ProductCard';
import { NavigationBar } from './NavigationBar';
import styles from './Store.module.css';

export const Store = () => {
  const products = [
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e5f46dbe3afb462318a149dcf4aa8abb8f8b3bc65e622711858580f9b087e4?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", title: "Vegetable", price: "Price", quantity: "Quantity", distance: "Distance" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e5f46dbe3afb462318a149dcf4aa8abb8f8b3bc65e622711858580f9b087e4?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", title: "Vegetable", price: "Price", quantity: "Quantity", distance: "Distance" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e5f46dbe3afb462318a149dcf4aa8abb8f8b3bc65e622711858580f9b087e4?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", title: "Vegetable", price: "Price", quantity: "Quantity", distance: "Distance" },
    { image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7e5f46dbe3afb462318a149dcf4aa8abb8f8b3bc65e622711858580f9b087e4?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0", title: "Vegetable", price: "Price", quantity: "Quantity", distance: "Distance" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.storeContent}>
        <div className={styles.header}>
          <div className={styles.storeHeader}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b851367f802b5292cf09a7c78d99b6909f607634482a2ecf04556964a267433e?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              alt="Store icon"
              className={styles.storeIcon}
            />
            <div className={styles.storeTitle}>Store</div>
          </div>
          <form className={styles.searchForm}>
            <label htmlFor="searchInput" className={styles.visuallyHidden}>
              Search for produce
            </label>
            <input
              type="search"
              id="searchInput"
              className={styles.searchInput}
              placeholder="Search for produce"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a2ba7be660fba5daf6b6c90625ef97553f3fa1e5eaca97ef13747418d9db6ed?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              alt="Search icon"
              className={styles.searchIcon}
            />
          </form>
          <div className={styles.productGrid}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9b6c3cea230af43016c4aaaf6b49baee11f1d4d038b01be2be60fb26c905a88?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            alt=""
            className={styles.floatingIcon}
          />
        </div>
        <NavigationBar />
      </div>
    </div>
  );
};