import React, { useState } from "react";
import styles from "./Header.module.css";

const WebMenu = () => <div>This is Web</div>;
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
