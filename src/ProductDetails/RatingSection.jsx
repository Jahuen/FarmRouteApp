import * as React from "react";
import styles from './ProductDetails.module.css';

function RatingSection() {
  return (
    <>
      <div className={styles.ratingTitle}>Rating this product</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34c3976cc12687264553b8efa42cee15976e4ca05fba9d6b8b1b55f9847142a?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
        className={styles.ratingStars}
        alt="Product rating stars"
      />
      <div className={styles.reviewSection}>
        <div>Ratings and Reviews</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9bc449f5b653358274bdb40528605ca96eacd2a812a89d8c8d308e88def65452?placeholderIfAbsent=true&apiKey=ed808397a1774bc99d92bdffc18231d0"
          className={styles.reviewIcon}
          alt="View all reviews"
        />
      </div>
    </>
  );
}

export default RatingSection;