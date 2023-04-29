import React from "react";
import { FaAngleRight, FaUser, FaChartBar, FaBox } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import styles from "./../styles/SideNav.module.css";

const SideNav = () => {
  return (
    <nav className={styles.nav}>
      <h1>AbaDash</h1>
      <div className={styles.menus}>
        <div className={styles.menu}>
          <p className={styles.title}>MAIN MENU</p>
          <div className={styles.content}>
            <div className={styles.menuItem}>
              <p>
                {" "}
                <MdOutlineDashboardCustomize />
                Dashboard
              </p>
              <span>
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <p className={styles.title}>Apps</p>
          <div className={styles.content}>
            <div className={styles.menuItem}>
              <p>
                {" "}
                <FaBox />
                Apps
              </p>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <div className={styles.menuItem}>
              <p>
                {" "}
                <FaChartBar />
                Charts
              </p>
              <span>
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.menu}>
          <p className={styles.title}>Manage</p>
          <div className={styles.content}>
            <div className={styles.menuItem}>
              <p>
                {" "}
                <FaUser />
                Users
              </p>
              <span>
                <FaAngleRight />
              </span>
            </div>
            <div className={styles.menuItem}>
              <p>
                {" "}
                <FaChartBar />
                Content
              </p>
              <span>
                <FaAngleRight />
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
