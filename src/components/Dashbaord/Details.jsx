import React from "react";
import DetailsCard from "./DetailsCard";
import styles from "./../../styles/Dashboard/Details.module.css";

const Details = () => {
  const details = [
    {
      title: "Today Expenses",
      price: 8500,
      progressPercent: 80,
      color: "#7ED321",
    },
    {
      title: "Income Detail",
      price: 7800,
      progressPercent: 70,
      color: "#593BDB",
    },
    {
      title: "Task Completed",
      price: 500,
      progressPercent: 50,
      color: "#FFAA16",
    },
    {
      title: "Amount Generated",
      price: 650,
      progressPercent: 60,
      color: "#FF1616",
    },
  ];
  return (
    <div className={styles.details}>
      {details.map((detail, index) => (
        <div className={styles.card}>
          <DetailsCard
            title={detail.title}
            price={detail.price}
            progress={detail.progressPercent}
            color={detail.color}
            styles={styles}
          />
        </div>
      ))}
    </div>
  );
};

export default Details;
