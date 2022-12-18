import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div id="contain">
        <Link className={styles.icon} to="/">
          MOONFLIX
        </Link>
      </div>
    </div>
  );
};
