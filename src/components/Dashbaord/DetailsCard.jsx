import React from "react";
import ProgressBar from "./../ProgressBar";

const DetailsCard = ({ title, price, progress, color, styles }) => {
  return (
    <div className={styles.card_item}>
      <p className={styles.card__title}>{title}</p>
      <p className={styles.card__content}>
        $ <span>{price}</span>
      </p>
      <ProgressBar width={progress} color={color} />
    </div>
  );
};

export default DetailsCard;
