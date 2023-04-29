import React from "react";
import { MdMenu, MdNotifications, MdSearch, MdPerson } from "react-icons/md";
import styles from "./../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <MdMenu />
        <span>
          <MdSearch />
          <input type="text" name="" id="" placeholder="Search" />
        </span>
      </div>
      <div className={styles.action}>
        <MdNotifications />
        <MdPerson />
      </div>
    </nav>
  );
};

export default Navbar;
