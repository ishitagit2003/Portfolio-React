import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home= () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ishita</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:ishitagupta2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("home/homeImage.png")}
        alt="Image of me"
        className={styles.homeImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
