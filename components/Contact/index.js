import React from "react";
import styles from "./Contact.module.css";
import Separator from "../common/Separator";
import SocialContact from "../common/SocialContact";
// import resume from "../../public/resume-max.pdf";

function Contact() {
  return (
    <div className={styles.contact}>
      <Separator />
      <label className={styles.sectionTitle}>Contact</label>
      <div className={styles.contactContainer}>
        <div className={styles.contactLeft}>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className={styles.download}>
          <a href="./resume-max.pdf" download>
            <i className={`fi fi-rr-cloud-download ${styles.downloadIcon}`}></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
