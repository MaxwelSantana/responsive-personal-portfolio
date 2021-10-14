import React, { useState } from "react";
import styles from "./Header.module.css";

const WebMenu = () => (
  <div className={styles.web}>
    <div className={styles.webOption}>
      <a href="#project">
        <i className={`fi fi-rr-edit-alt ${styles.optionIcon}`}></i>Projects
      </a>
    </div>
    <div className={styles.webOption}>
      <a href="#skills">
        <i className={`fi fi-rr-laptop ${styles.optionIcon}`}></i>Skills
      </a>
    </div>
    <div className={styles.webOption}>
      <a href="#work">
        <i className={`fi fi-rr-briefcase ${styles.optionIcon}`}></i>Work
      </a>
    </div>
    <div className={styles.webOption}>
      <a href="#contact">
        <i className={`fi fi-rr-user ${styles.optionIcon}`}></i>Contact
      </a>
    </div>
  </div>
);

const MobileMenu = () => <div>This is Mobile</div>;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Maxwel S</div>
      <div className={styles.menu}>
        <div className={styles.webMenu}>
          <WebMenu />
        </div>
        <div className={styles.mobileMenu}>
          <div onClick={() => setIsOpen(!isOpen)}>
            <i className={`fi fi-rr-apps ${styles.menuIcon}`}></i>
          </div>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
