import React from "react";
import Image from "next/image";
import styles from "./About.module.css";
import coding from "../../public/coding.png";
import SocialContact from "../common/SocialContact";

function About() {
  return (
    <div className={styles.about}>
      <div className={styles.aboutTop}>
        <div className={styles.aboutInfo}>
          Hello There 👋, I am
          <br /> <span className={styles.aboutInfoName}>Maxwel Guy</span>
          <br /> I love experimenting with the web.
        </div>
        <div className={styles.aboutPhoto}>
          <Image src={coding} className={styles.picture} />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
