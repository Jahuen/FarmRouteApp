import React from 'react';
import styles from './Store.module.css';

export const ProductCard = ({ image, title, price, quantity, distance }) => {
  return (
    <div className={styles.productCard}>
      <img
        loading="lazy"
        src={image}
        alt={`${title} product`}
        className={styles.productImage}
      />
      <div className={styles.productTitle}>{title}</div>
      <div className={styles.productPrice}>{price}</div>
      <div>{quantity}</div>
      <div>{distance}</div>
    </div>
  );
};