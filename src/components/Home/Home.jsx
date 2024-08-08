import React from "react";

import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home= () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ishita</h1>
        <p className={styles.description}>
          I'm a MERN developer based in Ghaziabad, Uttar Pradesh, India.<br></br>
          I’ve built numerous backend servers and frontend applications. I’m passionate about creating new, user-friendly apps with attractive designs. 
        </p>
        <div className={styles.btns}>
        <button className={styles.cvBtn} onClick={() => window.open('./assets/Resume Ishita.pdf')}>
            Download CV
          </button>
        <a href="mailto:ishitagupta2003@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        </div>
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
