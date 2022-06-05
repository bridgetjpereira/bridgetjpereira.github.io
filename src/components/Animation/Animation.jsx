import React from "react";
import styles from "./Animation.module.scss";

const Animation = () => {
  return (
    <div className={styles.paperplane}>
      <div className={styles.plane}>
        <div className={styles.wingRight}></div>
        <div className={styles.wingLeft}></div>
        <div className={styles.bottom}></div>
        <div className={styles.top}></div>
        <div classNaem={styles.middle}></div>
      </div>
      <div className={styles.clouds}>
        <div className={styles.cloudOne}></div>
        <div className={styles.cloudTwo}></div>
        <div className={styles.cloudThree}></div>
      </div>
    </div>
  );
};

export default Animation;
