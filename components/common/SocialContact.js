import React from "react";
import { SocialData } from "../data/social";
import styles from "./SocialContact.module.css";
import Image from "next/image";

function SocialContact() {
  const data = SocialData;
  return (
    <div className={styles.socialContact}>
      {data.map((item) => (
        <a href={item.link}>
          <div className={styles.socialIconDiv}>
            <Image
              className={styles.socialIcon}
              src={item.icon}
              alt={item.platform}
            />
          </div>
        </a>
      ))}
    </div>
  );
}

export default SocialContact;
