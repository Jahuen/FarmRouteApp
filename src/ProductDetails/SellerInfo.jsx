import * as React from "react";
import styles from './ProductDetails.module.css';

function SellerInfo() {
  return (
    <>
      <div className={styles.sellerCard} />
      <div className={styles.sellerTitle}>Seller's Information</div>
      <div className={styles.sellerName}>Name</div>
      <div className={styles.sellerContact}>Contact Number</div>
      <div className={styles.divider} />
    </>
  );
}

export default SellerInfo;