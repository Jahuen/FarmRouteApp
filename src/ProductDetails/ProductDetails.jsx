import * as React from "react";
import styles from './ProductDetails.module.css';
import SellerInfo from './SellerInfo';
import RatingSection from './RatingSection';

function ProductDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.productCard}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fabf498e0c4dd4f02d893bf8addd65fcb8dfa7592b41962409b0d534f7ac784?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              className={styles.icon}
              alt=""
            />
            <div className={styles.title}>Details</div>
          </div>
          <div className={styles.actionIcons}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f76527fded09797d1ae59264079bb3c33d20e8587b901892e495fd36888e9837?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              className={styles.icon}
              alt="Share product"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bf5ae0d775327a2453d508f5996fef0550f330bfe0e9a010efb974a15548033?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
              className={styles.icon}
              alt="Add to favorites"
            />
          </div>
        </div>
        
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e7585133aaee053e1b605e1743b0398d4a778226f32d9acac9dceb0cfbd6054?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
          className={styles.productImage}
          alt="Product vegetable"
        />
        
        <div className={styles.productInfo}>
          <div className={styles.productDetails}>
            <div className={styles.productName}>Vegetable</div>
            <div className={styles.productPrice}>Price</div>
            <div className={styles.productQuantity}>Quantity</div>
            <div className={styles.productDistance}>Distance</div>
            <div className={styles.productDescription}>Description:</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d2b7060781cbe5d73b09923d007046bd3f008a635713db0537c1b6cb767f43?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
            className={styles.icon}
            alt=""
          />
        </div>

        <SellerInfo />
        <RatingSection />
      </div>
    </div>
  );
}

export default ProductDetails;